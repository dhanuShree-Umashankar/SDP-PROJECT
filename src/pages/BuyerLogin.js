import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyerLogin.css';

const BuyerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Handle login logic here

    // Navigate to the desired page after successful login
    navigate('/Faqpage');
  };

  return (
    <div className="login-page">
  <div className="left-container"></div>
  <div className="right-container">
    <div className="header-text">
      <h2>Buy from anywhere.</h2>
      <p>Source crops the smarter way with Complete Farmer Buyer</p>
    </div>
    <div className="form-wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  </div>
</div>


  );
};

export default BuyerLogin;
