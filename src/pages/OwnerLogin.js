import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import './OwnerLogin.css';

const OwnerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
      // const response = await axios.post('http://localhost:9001/api/sellers/login', formData);
      // console.log('Login successful:', response.data);
      navigate('/PostForm'); // Navigate to the landing page on successful login
    } catch (error) {
      if (error.response && error.response.data) {
        // Set specific error message from the server
        setErrorMessage(error.response.data.error || 'Login failed');
      } else {
        // Set general error message if no response from server
        setErrorMessage('An error occurred');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="left-container">
        {/* Add any additional content or image here */}
      </div>
      <div className="right-container">
        <div className="header-text">
          <h2>Farm from anywhere.</h2>
          <p>Everything you need in one place.</p>
        </div>
        <div className="form-wrapper">
          <h1>Login</h1>
          {errorMessage && <div className="error-message">{typeof errorMessage === 'object' ? JSON.stringify(errorMessage) : errorMessage}</div>}
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

export default OwnerLogin;
