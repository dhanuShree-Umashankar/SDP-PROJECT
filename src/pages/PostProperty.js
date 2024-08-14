// PostPropertyForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostProperty.css';

const PostProperty = () => {
  const navigate = useNavigate();
  const [propertyName, setPropertyName] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [location, setLocation] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [contact, setContact] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const propertyDetails = {
      propertyName,
      price,
      area,
      location,
      ownerName,
      contact,
      image,
    };
    console.log('Property Posted:', propertyDetails);
    navigate('/land'); // Navigate back to the land page or any other desired route
  };

  return (
    <div className="post-property-form">
      <h2>Post Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Property Name:</label>
          <input
            type="text"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Area:</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Owner Name:</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostProperty;
