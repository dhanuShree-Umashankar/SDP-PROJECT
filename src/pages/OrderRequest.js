import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderRequest.css';

const OrderRequest = () => {
  const [formData, setFormData] = useState({
    buyerName: '',
    contactDetails: '',
    buyerType: '',
    quantity: '',
    requestDate: '',
    orderDate: '',
    product: ''
  });

  useEffect(() => {
    // Fetch the buyer information from localStorage
    const buyerName = localStorage.getItem('buyer_name');
    const contactDetails = localStorage.getItem('contact_details');

    if (buyerName && contactDetails) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        buyerName: buyerName,
        contactDetails: contactDetails
      }));
    } else {
      console.error('Buyer information not found in localStorage.');
      // Optionally, redirect or show a message
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:9001/api/confirmOrder', formData)
      .then((response) => {
        console.log('Order confirmed:', response.data);
        // Redirect or show a success message
      })
      .catch((error) => {
        console.error('Error confirming order:', error);
      });
  };

  return (
    <div className="order-request-form">
      <h2>Order Request</h2>
      <form onSubmit={handleSubmit} className="order-request-form-page">
        <div className="form-group">
          <label htmlFor="buyerName">Buyer Name</label>
          <input
            type="text"
            id="buyerName"
            name="buyerName"
            value={formData.buyerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactDetails">Contact Details</label>
          <input
            type="text"
            id="contactDetails"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="buyerType">Buyer Type</label>
          <select
            id="buyerType"
            name="buyerType"
            value={formData.buyerType}
            onChange={handleChange}
            required
          >
            <option value="">Select Buyer Type</option>
            <option value="retailer">Retailer</option>
            <option value="wholesaler">Wholesaler</option>
            <option value="foodProcessingIndustry">Food Processing Industry</option>
            <option value="cloudKitchen">Cloud Kitchen</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="requestDate">Request Date</label>
          <input
            type="date"
            id="requestDate"
            name="requestDate"
            value={formData.requestDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderDate">Order Date</label>
          <input
            type="date"
            id="orderDate"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderRequest;
