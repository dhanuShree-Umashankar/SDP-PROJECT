import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Donate.css';

const Donate = () => {
  const navigate = useNavigate();

  const DonationPayment = () => {
    navigate('/DonationPayment');
  };

  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <h1>Make Change Possible in Agriculture</h1>
          <p>By supporting Farm Foundation, you can be part of the movement to help agriculture thrive.</p>
        </div>
      </div>
      <div className="donation-page">
        <h1>Areas Your Donation Will Impact:</h1>
        <div className="impact-section">
          <div className="impact-item">
            <div className="impact-image seed-manure"></div>
            <div className="impact-content">
              <h2>Seed & Organic Manure</h2>
              <p>
                Contribute to Bharatiya Jana Seva Mission, the ranked NGO for Agriculture to purchase high-quality seeds and organic manure, promoting healthier soil and sustainable farming practices. Your donation helps us provide farmers with the foundation for bountiful and eco-friendly harvests in West Bengal.
              </p>
            </div>
          </div>
          <div className="impact-item">
            <div className="impact-image agriculture-machinery"></div>
            <div className="impact-content">
              <h2>Agriculture Machinery</h2>
              <p>
                Help us, the top NGO for farmers, supporting to equip farmers with advanced agriculture machinery. By introducing modern tools, we aim to enhance efficiency, reduce labor, and promote sustainable farming techniques that benefit both farmers and the environment in India.
              </p>
            </div>
          </div>
          <div className="impact-item">
            <div className="impact-image farmers-education"></div>
            <div className="impact-content">
              <h2>Farmers Education</h2>
              <p>
                Support our educational programs that empower farmers with knowledge on modern and climate-smart agriculture practices. Your donation ensures that farmers are well-informed, enabling them to make sustainable choices and adapt to the challenges of a changing climate in India.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="donate-now-button">
        <button onClick={DonationPayment}>Donate Now</button>
      </div>
    </div>
  );
};

export default Donate;
