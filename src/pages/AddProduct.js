import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Initialize form data with name and contact from local storage
  const farmerInfo = JSON.parse(localStorage.getItem('farmerInfo')) || {};
  const [formData, setFormData] = useState({
    category: category || 'vegetables',
    productName: '',
    quantity: '',
    price: '',
    description: '',
    imageFile: null, // Updated to handle file upload
    farmerName: farmerInfo.name || '',
    contact: farmerInfo.mobile || ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageFile') {
      setFormData({
        ...formData,
        imageFile: files[0] // Save the selected file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('category', formData.category);
    data.append('productName', formData.productName);
    data.append('quantity', formData.quantity);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('imageFile', formData.imageFile); // Append the file to the form data
    data.append('farmerName', formData.farmerName);
    data.append('contact', formData.contact);

    axios.post('http://localhost:9001/api/AddProduct', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        navigate('/ProductListPage');
      })
      .catch((error) => {
        console.error('There was an error adding the product!', error);
      });
  };

  return (
    <div className="add-products-form-page">
      <h2>Add Product Details</h2>
      <form onSubmit={handleSubmit} className="add-products-form">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} required>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="cereals">Cereals</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" name="productName" value={formData.productName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity (in kgs)</label>
          <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} step="1" required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="farmer-name">Farmer Name</label>
          <input type="text" id="farmer-name" name="farmerName" value={formData.farmerName} onChange={handleChange} required readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="image-file">Upload Image</label>
          <input type="file" id="image-file" name="imageFile" onChange={handleChange} accept="image/*" required />
        </div>
        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
