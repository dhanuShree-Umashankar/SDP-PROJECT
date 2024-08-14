import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './OwnerReg.css';

const OwnerReg = () => {
  const [formData, setFormData] = useState({
    legalName: '',
    aadharNumber: '',
    contact: '',
    address: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9001/api/owners/register', formData);
      console.log('Registration successful:', response.data);
      navigate('/OwnerLogin'); // Navigate to login page on successful registration
    } catch (error) {
      if (error.response && error.response.data) {
        // Set specific error message from the server
        setErrorMessage(error.response.data.error || 'Registration failed');
      } else {
        // Set general error message if no response from server
        setErrorMessage('An error occurred');
      }
    }
  };

  return (
    <div className="container">
      <div className="registration-page">
        <div className="header">
          <div className="profile-icon"></div>
          <h3>Profile Information</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="legalName">Owner Legal Name<span className="required">*</span></label>
              <input
                type="text"
                id="legalName"
                name="legalName"
                value={formData.legalName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="aadharNumber">Aadhar Number<span className="required">*</span></label>
              <input
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact<span className="required">*</span></label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address<span className="required">*</span></label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email<span className="required">*</span></label>
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
              <label htmlFor="password">Create Password<span className="required">*</span></label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {errorMessage && <div className="error-message">{typeof errorMessage === 'object' ? JSON.stringify(errorMessage) : errorMessage}</div>}

          <button type="submit" className="submittt-button">Register</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <Link to="/OwnerLogin">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default OwnerReg;
