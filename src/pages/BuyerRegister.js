import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BuyerRegister.css';

const BuyerRegister = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    buyerName: '',
    contactDetails: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing buyer data from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        buyerName: user.name || '',
        contactDetails: user.contact || '',
        email: user.email || ''
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {
    const { companyName, buyerName, contactDetails, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:9001/api/BuyerRegister', {
        companyName,
        buyerName,
        contactDetails,
        email,
        password
      });

      if (response.status === 200) {
        navigate('/BuyerLogin');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="buyer-registration">
      <div className="image-containerr">
        {/* Optional: Add an image or background image */}
      </div>
      <div className="form-section">
        <h1 className="header-text">Transform Your Buying Experience Now</h1>
        <div className="form-container">
          <h2>Create an account</h2>
          
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="buyerName"
            placeholder="Buyer Name"
            value={formData.buyerName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contactDetails"
            placeholder="Contact Details"
            value={formData.contactDetails}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button onClick={handleRegister}>Register</button>
          {error && <p className="error">{error}</p>}
          <p>
            Already have an account? <a href="/BuyerLogin">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerRegister;
