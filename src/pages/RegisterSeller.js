import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './RegisterSeller.css';

const RegisterSeller = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    aadhar: '',
    email: '',
    address: '',
    city: '',
    district: '',
    state: '',
    createPassword: ''
  });

  const [error, setError] = useState('');
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

    setError('');

    try {
      const response = await axios.post('http://localhost:9001/api/sellers/signup', {
        name: formData.name,
        mobile: formData.mobile,
        aadhar: formData.aadhar,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        district: formData.district,
        state: formData.state,
        password: formData.createPassword
      });

      console.log('User registered:', response.data);

      // Store farmer's details in local storage
      localStorage.setItem('farmerInfo', JSON.stringify({
        name: formData.name,
        mobile: formData.mobile
      }));

      navigate('/Login');
    } catch (error) {
      console.error('There was an error registering the user!', error);
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.error || 'Registration failed. Please try again.';
        setError(errorMsg);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="register-seller-page">
      <h1>Create Account to get started</h1>
      <form onSubmit={handleSubmit} className="register-seller-form">
        <div className="form-group">
          <h3>Seller Registration Form</h3>
          <div className="login-link">
            <span>Already have an account? </span>
            <Link to="/login">Login</Link>
          </div>
        </div>
        {/* Input fields */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadhar">Aadhar</label>
          <input
            type="text"
            id="aadhar"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            required
          />
        </div>
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
          <label htmlFor="address">Address</label>
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
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District</label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="createPassword">Password</label>
          <input
            type="password"
            id="createPassword"
            name="createPassword"
            value={formData.createPassword}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterSeller;
