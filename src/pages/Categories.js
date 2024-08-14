import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Categories.css'; // Make sure to update or create this CSS file

const Categories = () => {
  const [categories, setCategories] = useState([
    { name: 'Tomato', count: 0,  },
    { name: 'Potato', count: 0,  },
    { name: 'Brinjal', count: 0,  },
    { name: 'Bitter Gourd', count: 0, },
    { name: 'Carrot', count: 0,   },
  ]);

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Function to retrieve the latest products based on date
  const fetchProducts = () => {
    axios.get('/api/vegetables/latest')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the latest products!", error);
      });
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  const handleAddProduct = () => {
    navigate('/AddProduct'); // Navigate to the "Add Product" page
  };

  return (
    <><div>
      <img
        src='/addproduct.jpg'
        alt="Header"
        className="full-width-image" />

      <div className="circles-container">
        <div className="circle"><span>Ease of selling</span></div>
        <div className="circle"><span>Wider choice of buyers</span></div>
        <div className="circle"><span>Support to enhance quality</span></div>
        <div className="circle"><span>Transparent price discovery</span></div>
        <div className="circle"><span>Access to market info</span></div>
        <div className="circle"><span>Option to sell full harvest</span></div>
      </div>
    </div><div className="dashboard-container">
        <div className="prod-list-container">
          
        </div>

        <div className="prod-category-container">
          <h2 className="prod-category-header">Categories</h2>
          <ul className="prod-category-list">
            {categories.map((category, index) => (
              <li key={index} className="prod-category-item">
                <span className="prod-category-name">{category.name}</span>
                <span className="prod-category-count">{category.count}</span>
                <button onClick={handleAddProduct} className="prod-add-button">Add Product</button>
              </li>
            ))}
          </ul>
        </div>
      </div></>
  );
};

export default Categories;
