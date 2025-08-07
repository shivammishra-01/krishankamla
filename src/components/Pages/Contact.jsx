import React from "react";
import "./Contact.css";
import bgImage from "../assets/top-view-blue-monday-concept-composition-with-telephone.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="overlay">
        <form className="contact-form">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
