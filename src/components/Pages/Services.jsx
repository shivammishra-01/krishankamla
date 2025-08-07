import React from "react";
import "./Services.css";

const services = [
  {
    title: "Training",
    description:
      "Industry-ready hands-on training in Web Development, MERN Stack, and modern tools.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zm0 6.18L4.24 7.5 12 4.82l7.76 2.68L12 8.18zm-9 4.5v3l9 4.5 9-4.5v-3L12 16.68 3 12.68z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    action: "Learn More",
  },
  {
    title: "Internship",
    description:
      "Real projects, mentorship, and experience to boost your resume and skills.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h16v4H4V4zm0 6h16v10H4V10zm2 2v6h12v-6H6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    action: "Apply Now",
  },
  {
    title: "Job Assistance",
    description:
      "Resume review, mock interviews, and placement guidance for IT roles.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 7h16v2H4V7zm0 4h16v8H4v-8zm2 2v4h12v-4H6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    action: "Get Help",
  },
];

export default function Services() {
  return (
    <div className="services-section-new">
      <div className="services-header">
        <div>
          <h2>Our Services</h2>
          <p className="subtitle">
            Training, Internships & Job support tailored for IT aspirants.
          </p>
        </div>
        <button className="primary-btn">Explore All</button>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card-new" key={i}>
            <div className="icon-wrapper">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <div className="action-row">
              <span className="action-text">{s.action}</span>
              <div className="arrow">→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
