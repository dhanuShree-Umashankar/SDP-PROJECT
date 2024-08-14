import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faHandshake, faTractor, faDonate } from '@fortawesome/free-solid-svg-icons';
//import './footer.css';
import './Footers.css';

const Footers = () => {
  return (
    <footer className="Footers">
      <div className="container">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul className="list">
            <li className="list-item"><FontAwesomeIcon icon={faHome} /> Home</li>
            <li className="list-item"><FontAwesomeIcon icon={faHandshake} /> Buyer Seller</li>
            <li className="list-item"><FontAwesomeIcon icon={faTractor} /> Land Tenancy</li>
            <li className="list-item"><FontAwesomeIcon icon={faDonate} /> Donate</li>
            <li className="list-item"><FontAwesomeIcon icon={faEnvelope} /> Contact Us</li>
          </ul>
        </div>
        <div className="map">
          <h4>Find Us</h4>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019917598396!2d144.95373631568025!3d-37.81627974200327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778ef8f44e7f8b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1620132641460!5m2!1sen!2sau"
            width="300"
            height="200"
            className="iframe"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: FarmAssist@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Call Us: +91 8734567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
