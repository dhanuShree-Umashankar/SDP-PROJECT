// ProductListPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BuyerProductPage.css';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from backend
    axios.get('http://localhost:9001/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const handleOrderNow = () => {
    navigate('/OrderRequest'); // Navigate to order request form without product ID
  };

  const handleEnquiry = () => {
    // Add your enquiry handling logic here
    console.log(`Enquiry clicked`);
  };

  return (
    <div className="product-list-page">
      <h1>Product List</h1>
      <div className="product-list-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={`http://localhost:9001/uploads/${product.imageUrl}`} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Description: {product.description}</p>
            <p>Seller: {product.farmerName}</p>
            <p>Contact: {product.contact}</p>
            <div className="product-card-buttons">
              <button className="order-now-button" onClick={handleOrderNow}>Order Now</button>
              <button className="enquiry-button" onClick={handleEnquiry}>Enquiry</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
