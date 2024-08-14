import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Land.css';
import { useNavigate } from 'react-router-dom';

const Land = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [areaFilter, setAreaFilter] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('');

  useEffect(() => {
    // Fetch data from backend API
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:9001/api/properties'); // Corrected API endpoint
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAreaFilter = (e) => {
    setAreaFilter(e.target.value);
  };

  const handleBudgetFilter = (e) => {
    setBudgetFilter(e.target.value);
  };

  const budgetRanges = {
    '₹10,000 - ₹50,000': [10000, 50000],
    '₹50,000 - ₹1,00,000': [50000, 100000],
    // Add more ranges as needed
  };

  const filteredProperties = properties.filter((property) => {
    const [minBudget, maxBudget] = budgetRanges[budgetFilter] || [0, Infinity];
    return (
      property.location.toLowerCase().includes(areaFilter.toLowerCase()) &&
      property.price >= minBudget &&
      property.price <= maxBudget &&
      (property.ownerName.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const PostProperty = () => {
    navigate('/LandLogin'); // Navigate to the LandDetails form
  };

  return (
    <div className="land-listings">
      <div className="background-image">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="content">
        <div className="filter-sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <label>Area</label>
            <select value={areaFilter} onChange={handleAreaFilter}>
              <option value="">All</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Tirupur">Tirupur</option>
              <option value="Karur">Karur</option>
              <option value="Trichy">Trichy</option>
              <option value="Madurai">Madurai</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Budget</label>
            <select value={budgetFilter} onChange={handleBudgetFilter}>
              <option value="">All</option>
              <option value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</option>
              <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
            </select>
          </div>
        </div>
        <div className="property-list">
          {filteredProperties.map((property, index) => (
            <div key={index} className={`property-card property-${index}`}>
              <div className="property-image">
                <img src={property.propertyImageUrl} alt={`Property ${index}`} />
              </div>
              <div className="property-details">
                <h4>{property.ownerName}</h4>
                <p>Price: ₹{property.price}</p>
                <p>Area: {property.sqFeet} sq. ft.</p>
                <p>Location: {property.location}</p>
                <p>Owner Contact: {property.ownerContact}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="post-property">
          <button onClick={PostProperty}>Post Property</button>
        </div>
      </div>
    </div>
  );
};

export default Land;
