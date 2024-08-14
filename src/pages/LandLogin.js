import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LandLogin.css';

const LandLogin = () => {
  const navigate = useNavigate(); // Create navigate function

  const handleButtonClick = () => {
    navigate('/OwnerReg'); // Navigate to the OwnerReg page
  };

  return (
    <div className="property-steps-container">
      <h2>Post Your Property in <br />3 Simple Steps</h2>
      <div className="steps">
        <div className="step">
          <div className="step-icon step1-icon"></div>
          <h3>01. Add details of your property</h3>
          <p>Begin by telling us the few basic details about your property like your property type, location, No. of rooms etc.</p>
        </div>
        <div className="step">
          <div className="step-icon step2-icon"></div>
          <h3>02. Upload Photos & Videos</h3>
          <p>Upload photos and videos of your property either via your desktop device or from your mobile phone.</p>
        </div>
        <div className="step">
          <div className="step-icon step3-icon"></div>
          <h3>03. Add Pricing & Ownership</h3>
          <p>Just update your property’s ownership details and your expected price and your property is ready for posting.</p>
        </div>
      </div>
      <button className="post-property-button" onClick={handleButtonClick}>Begin to Post your Property</button>
    </div>
  );
};

export default LandLogin;
