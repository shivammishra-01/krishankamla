import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="#">› <span>Web Development</span></Link></li>
            <li><Link to="#">› Ecommerce Development</Link></li>
            <li><Link to="#">› Framework Development</Link></li>
            <li><Link to="#">› Web Design</Link></li>
            <li><Link to="#">› Mobile Apps Development</Link></li>
            <li><Link to="#">› Digital Transformation</Link></li>
            <li><Link to="#">› Custom IT Solution</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About us</h4>
          <ul>
            <li><Link to="#">› Co-Founders</Link></li>
            <li><Link to="#">› Our Core Team</Link></li>
            <li><Link to="#">› Testimonials</Link></li>
            <li><Link to="#">› Blog</Link></li>
            <li><Link to="#">› News & Events</Link></li>
            <li><Link to="#">› Careers</Link></li>
            <li><Link to="#">› Conferences & Trade Shows</Link></li>
            <li><Link to="#">› Hire Us</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Other Quick links</h4>
          <ul>
            <li><Link to="#">› Portfolio</Link></li>
            <li><Link to="#">› Case Studies</Link></li>
            <li><Link to="#">› Products</Link></li>
            <li><Link to="#">› Videos</Link></li>
            <li><Link to="#">› Site Map</Link></li>
            <li><Link to="#">› FAQ’s</Link></li>
            <li><Link to="#">› Contact</Link></li>
            <li><Link to="#">› BT USA</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Get In Touch</h4>
          <p><strong>Email:</strong> <a href="krishankamla@gmail.com">krishankamla@gmail.com</a></p>
          <p>Please feel free to fill our contact form and our business analyst would get in touch with you shortly with a quote.</p>
          <img src="https://i.imgur.com/qHJy1Hd.png" alt="Rating" style={{ marginTop: '10px', borderRadius: '10px', maxWidth: '140px' }} />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2004-2025 Brain Technosys Pvt Ltd. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaPinterestP /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
