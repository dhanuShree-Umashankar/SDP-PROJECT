import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Categoriesss.css';

const Categoriesss = () => {
  const [categories, setCategories] = useState([
    { name: 'Vegetables', className: 'vegetables', count: 0 },
    { name: 'Fruits', className: 'fruits', count: 0 },
    { name: 'Cereals', className: 'cereals', count: 0 },
  ]);

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Function to retrieve the latest products based on date
  const fetchProducts = () => {
    axios.get('/api/products/latest')
      .then(response => {
        setProducts(response.data);
        updateCategoryCounts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the latest products!", error);
      });
  };

  // Function to update the product counts for each category
  const updateCategoryCounts = (products) => {
    const updatedCategories = categories.map(category => {
      const productCount = products.filter(product => product.category === category.name).length;
      return { ...category, count: productCount };
    });
    setCategories(updatedCategories);
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  return (
    <div>
      <img
        src='/addproduct.jpg'
        alt="Header"
        className="full-width-image"
      />
      <h1 className="page-title">Choose Category & Add Product</h1>

      <div className="categories-container">
        {categories.map((category, index) => (
          <Link 
            key={index} 
            to={`/AddProduct?category=${category.name}`} // Link to AddProduct page with category parameter
            className={`category-card ${category.className}`}
          >
            <div className="category-title">{category.name}</div>
            <span className="prod-category-count">{category.count}</span>
          </Link>
        ))}
      </div>

      <div className="circles-container">
        <div className="circle"><span>Ease of selling</span></div>
        <div className="circle"><span>Wider choice of buyers</span></div>
        <div className="circle"><span>Support to enhance quality</span></div>
        <div className="circle"><span>Transparent price discovery</span></div>
        <div className="circle"><span>Access to market info</span></div>
        <div className="circle"><span>Option to sell full harvest</span></div>
      </div>

      <div className="view-products-container">
        <button onClick={() => navigate('/productdashboard')} className="view-products-button">
          View Products
        </button>
      </div>
    </div>
  );
};

export default Categoriesss;
