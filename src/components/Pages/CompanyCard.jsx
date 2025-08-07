import React, { useRef, useEffect } from "react";
import "./CompanyCard.css";

const companies = [
  { 
    name: "Google", 
    type: "Tech & Cloud Services", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", 
    link: "https://www.google.com" 
  },
  { 
    name: "TCS", 
    type: "IT & Consulting", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Tata_Consultancy_Services_Logo.svg", 
    link: "https://www.tcs.com" 
  },
  { 
    name: "Reliance", 
    type: "Energy & Retail", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Reliance_Industries_Logo.svg", 
    link: "https://www.ril.com" 
  },
  { 
    name: "Microsoft", 
    type: "Software & Cloud", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", 
    link: "https://www.microsoft.com" 
  },
  { 
    name: "Amazon", 
    type: "E-commerce & Cloud", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", 
    link: "https://www.amazon.com" 
  },
];

export default function CompanyCard() {
  const wrapperRef = useRef(null);
  const frameRef = useRef(null);
  const rafRef = useRef(null);
  const isHovered = useRef(false);
  const offsetRef = useRef(0);
  const cardWidthRef = useRef(0);
  const speed = 0.6; // pixel per frame

  useEffect(() => {
    const frame = frameRef.current;
    const wrapper = wrapperRef.current;
    if (!frame || !wrapper) return;

    const firstCard = frame.querySelector(".company-card");
    if (!firstCard) return;
    const cardRect = firstCard.getBoundingClientRect();
    const style = getComputedStyle(frame);
    const gap = parseFloat(style.gap || 18);
    cardWidthRef.current = cardRect.width + gap;

    const totalCycleWidth = cardWidthRef.current * companies.length;

    const step = () => {
      if (!isHovered.current) {
        offsetRef.current += speed;
        if (offsetRef.current >= totalCycleWidth) {
          offsetRef.current -= totalCycleWidth;
        }
        frame.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    const onEnter = () => { isHovered.current = true; };
    const onLeave = () => { isHovered.current = false; };
    wrapper.addEventListener("mouseenter", onEnter);
    wrapper.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrapper.removeEventListener("mouseenter", onEnter);
      wrapper.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const manualScroll = (direction) => {
    const totalCycleWidth = cardWidthRef.current * companies.length;
    offsetRef.current += direction * cardWidthRef.current;
    if (offsetRef.current < 0) offsetRef.current += totalCycleWidth;
    if (offsetRef.current >= totalCycleWidth) offsetRef.current -= totalCycleWidth;
    if (frameRef.current) {
      frameRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
  };

  return (
    <div className="company-card-wrapper">
      <div className="section-header">
        <h2>Our Clients</h2>
      </div>

      <div className="carousel-controls">
        <button className="nav-btn left" aria-label="Previous" onClick={() => manualScroll(-1)}>‹</button>
        <button className="nav-btn right" aria-label="Next" onClick={() => manualScroll(1)}>›</button>
      </div>

      <div className="company-card-viewport" ref={wrapperRef}>
        <div className="company-card-frame" ref={frameRef}>
          {[...companies, ...companies].map((company, index) => (
            <a
              key={index}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="company-card"
            >
              <div className="logo-wrapper">
                <img src={company.logo} alt={company.name} className="company-logo" />
              </div>
              <div className="company-info">
                <h3>{company.name}</h3>
                <p>{company.type}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
