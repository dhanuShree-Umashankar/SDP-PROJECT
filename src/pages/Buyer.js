import React from 'react';
import './Buyer.css'; // Importing CSS for styling
import { FaUser, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Buyer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <><div className="buyer-page">
      <div className="image-container">
        <div className="overlay-text">
          Maximise your income by accessing the widest buyer network in a secure & transparent way
        </div>
      </div>
    </div><div className="buyer-page">
        <div className="centered-content">
          <div className="tagline">
            Transform your farm's revenue by accessing the widest buyer network and land opportunities in a secure and transparent environment.
          </div>
          <div className="icon-section">
            <div className="icon-column">
              <FaUser size={100} className="icon" />
              <p> Farmer</p>
            </div>
            <div className="separators"></div>
            <div className="icon-column">
              <FaUsers size={100} className="icon" />
              <p>Group of Farmers</p>
            </div>
          </div>
          <div className="description">
            <p>Our service connects farmers directly with buyers and landowners, ensuring a secure and transparent marketplace that maximizes your profits.</p>
          </div>
          <div className="how-it-works">
            <h2>How It Works</h2>
            <div className="steps">
              <div className="step">
                <h3>Step 1</h3>
                <p>Register Seller Form</p>
              </div>
              <div className="step">
                <h3>Step 2</h3>
                <p>Add Goods</p>
              </div>
              <div className="step">
                <h3>Step 3</h3>
                <p>Get Connected with Vendor Directly</p>
              </div>
              <div className="step">
                <h3>Step 4</h3>
                <p>Sell Goods</p>
              </div>
            </div>
          </div>
          <div className="registration-button-container">
            <button 
              onClick={() => handleNavigation('/register-seller')} 
              className="registration-button"
            >
              Farmer Registration Form
            </button>
          </div>
        </div>
      </div></>
  );
};

export default Buyer;
