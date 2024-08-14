import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Seller.css';

const Seller = () => {
    const navigate = useNavigate();

    const BuyerRegister = () => {
         navigate('/BuyerRegister');
       
    };
    return (
        <>
            <div className="seller-container">
                <div className="overlay">
                    <h1 className="overlay-text">
                        We partner with verified farms to offer you the<br />
                        freshest produce as per your schedule.
                    </h1>
                </div>
                <button className="view-product-button" onClick={BuyerRegister}>
                    View Product &rarr;
                </button>
            </div>
            <div className="services-container">
                <div className="service-card">
                    <div className="service-icon retailers-icon"></div>
                    <h2>Retailers</h2>
                    <p>Daily delivery of quality fresh fruits & vegetables at best prices to Small Enterprises. We go extra mile to offer you the best selection of local & global produce. More happy customer. More income.</p>
                </div>
                <div className="separator"></div>
                <div className="service-card">
                    <div className="service-icon food-processing-icon"></div>
                    <h2>Food Processing</h2>
                    <p>We offer right price & price hedging mechanism to suit your unique quality norms & delivery schedule. We arrange pre-season buyer-farmer meetings, dedicate farms to take up crop plan, extend regular guidance, offer you digital visibility of the crop and delivery status.</p>
                </div>
                <div className="separator"></div>
                <div className="service-card">
                    <div className="service-icon exporters-icon"></div>
                    <h2>Wholesalers</h2>
                    <p>We identify best source to suit your bulk requirement across our registered farms on pan India level. We ensure total process compliance on quality, packing & handling so as to deliver as per the contract.</p>
                </div>
                <div className="separator"></div>
                <div className="service-card">
                    <div className="service-icon hotels-icon"></div>
                    <h2>Cloud Kitchens</h2>
                    <p>Leave your sourcing worries to us & reap the benefits of our Dynamic Source Optimisation module. We identify best source offering lowest prices in sync with your daily demand. You save money by optimising purchase prices, inventory & overhead cost. We also help you with market price feeds & outlook so as to help you plan your purchases efficiently.</p>
                </div>
            </div>
        </>
    );
};

export default Seller;
