import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import axios from 'axios';
import './ProductListPage.css'; // Add your styles

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Updated hook

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

  const handleAddProduct = () => {
    navigate('/addproduct'); // Updated navigation
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
          </div>
        ))}
      </div>
      <button className="add-product-button" onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductListPage;
