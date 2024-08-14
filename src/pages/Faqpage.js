import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Faqpage.css'; // Import your CSS file

const images = [
  'easyorder.jpg', // Replace with actual image paths
  'delivery.png',
  'money.png',
];

const Faqpage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    navigate('/BuyerProductPage'); // Navigate to the pdbuyer page
  };

  return (
    <>
      <div className="page-container">
        <div className="imagee-container">
          <div className="centered-text">
            Elevate Your Inventory: Bulk Orders of Fresh Farm Produce
          </div>
          <div className='productbutton'>
          <button className="vieww-product-button" onClick={handleButtonClick}>
            View Product &rarr;
          </button>
          </div>
        </div>
        <div className="text-below-image">
          Experience crop sourcing on autopilot from order to fulfilment.
        </div>
        <div className="text-below-image1">
          We take care of every step from production to shipment so you can confidently crush your procurement targets. Repeatedly.
        </div>
      </div>
      <div className="features">
        <div className="features-content">
          <div className="feature">
            <h5>Fast grower matching</h5>
            <p>Get matched with a pre-assessed farmer who will use<br /> our data-driven cultivation protocols to grow quality crops</p>
          </div>
          <div className="feature">
            <h5>Transparent monitoring</h5>
            <p>Track and monitor each stage of production on your<br /> personal dashboard</p>
          </div>
          <div className="feature">
            <h5>Reliable delivery</h5>
            <p>Produce is shipped to your desired destination in<br /> safe and secure packages</p>
          </div>
        </div>
        <div className="features-images">
          <img
            src={images[currentImageIndex]}
            alt="Feature slideshow"
            className="feature-image"
          />
        </div>
      </div>
      <div className="comparison-table">
        <div className="row header">
          <div className="column">Before FarmAssist Buyer</div>
          <div className="column">With FarmAssist Buyer</div>
        </div>
        <div className="row">
          <div className="column">
            <div className="icon">🌾</div>
            <div className="text">Low Quality Crops</div>
            <div className="icon">📄</div>
            <div className="text">Long and Fragmented Process</div>
            <div className="icon">👥</div>
            <div className="text">Middlemen Interference</div>
            <div className="icon">👁️</div>
            <div className="text">Lack of Transparency</div>
          </div>
          <div className="column">
            <div className="icon">🌾</div>
            <div className="text">High Quality Crops</div>
            <div className="icon">📄</div>
            <div className="text">Easy Digitized Process</div>
            <div className="icon">👥</div>
            <div className="text">Direct Access to Farmers</div>
            <div className="icon">👁️</div>
            <div className="text">Transparent Monitoring</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqpage;
