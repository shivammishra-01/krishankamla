import React from "react";
import AnimatedCarousel from "./AnimatedCarousel";
import CompanyCard from "./CompanyCard";
import Services from "./Services";

export default function Home() {
  return (
    <div>
      <AnimatedCarousel />
      <div style={{ marginTop: "30px" }}>
        <Services />
      </div>
      <div style={{ marginTop: "30px" }}>
        <CompanyCard />
      </div>
      
    </div>
  );
}
