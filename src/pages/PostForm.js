import React, { useState } from 'react';
import axios from 'axios';

const PostPropertyForm = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerContact: '',
    location: '',
    sqFeet: '',
    price: '',
    propertyImageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9001/api/properties', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error uploading the property!', error);
    }
  };

  return (
    <div className="post-property-form">
      <h2>Post Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ownerName">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ownerContact">Owner Contact</label>
          <input
            type="text"
            id="ownerContact"
            name="ownerContact"
            value={formData.ownerContact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location of Property</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sqFeet">Square Feet</label>
          <input
            type="number"
            id="sqFeet"
            name="sqFeet"
            value={formData.sqFeet}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="propertyImageUrl">Property Image URL</label>
          <input
            type="text"
            id="propertyImageUrl"
            name="propertyImageUrl"
            value={formData.propertyImageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostPropertyForm;
