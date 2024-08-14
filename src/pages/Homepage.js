import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Homepage.css'; 



const Homepage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Register-seller');
  };
  return (
    <>
      <div className="carousel-container">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div className="carousel-slide slide1">
            <div className="carousel-text">
              <h3>From Farm Fields to Market Shelves</h3>
            </div>
          </div>
          <div className="carousel-slide slide2">
            <div className="carousel-text">
              <h3>Your Land, Their Future: A Harvest of Opportunities</h3>
            </div>
          </div>
          <div className="carousel-slide slide3">
            <div className="carousel-text">
              <h3>Where Farming Meets Profitability</h3>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="goals">
        <h3><strong>OUR GOALS</strong></h3>
        <p>We connect fresh produce farmers to businesses through a collaborative approach.</p>

        <div className="grid-text-center">
          <div className="cont">
            <div className="count-box">01</div>
            <h3>Vision</h3>
            <p>
              The mission of the FarmAssist is to empower farmers by creating a direct link between them and vendors.
              We aim to eliminate transportation costs and other intermediaries, allowing farmers to sell their goods directly.
              Additionally, we support landless farmers by helping them find available land for lease, connecting them directly with landowners.
              Our mission extends to financial assistance, where donations from people are transformed into essential agricultural products for farmers.
            </p>
          </div>

          <div className="cont">
            <div className="count-box">02</div>
            <h3>Mission</h3>
            <p>
              Our mission is to empower small farmers to produce healthy, nutritious crops for their local communities and beyond.
              We aim to create sustainable initiatives and long-term partnerships with our farmers, providing constant support and assistance, both financially and technically.
            </p>
          </div>

          <div className="cont">
            <div className="count-box">03</div>
            <h3>Values</h3>
            <p>
              The FarmAssist operates with a clear purpose to empower farmers and enhance their livelihoods.
              Our core values drive our actions every day. We believe in equitable access to fresh, locally sourced food.
              We champion economic, social, and environmental justice.
              Compassion and support guide our interactions, while transparency and accountability underpin our operations.
              We foster collaboration within our community and continuously seek innovative solutions.
              Together, we’re building a thriving ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h1 className="content-title">Faster growth starts with FarmAssist</h1>

        <div className="content-body">
          <div className="text-content farmers-box">
            <h2 className="sub-title">FOR FARMERS</h2>
            <p className="content-text">
              Earn more by growing cash crops to meet market demand and our buyer specifications.
              Get expert agronomic and managerial support, access inputs and farm services,
              and receive reliable data to help you farm better.
            </p>
            <button className="rounded-button" onClick={handleButtonClick}>Farm the Better Way!</button>
          </div>
          <div className="image-content1" />
        </div>

        <div className="content-body buyers-content">
          <div className="text-content farmers-box">
            <h2 className="sub-title">FOR BUYERS</h2>
            <p className="content-text">
              Get everything you need for seamless crop procurement from order to fulfilment all in one place.
              Gain access to a network of qualified farmers, uncovering new business opportunities.
            </p>
            <Link to="/BuyerRegister" className="rounded-button">Source quality crops</Link> {/* Rounded button */}
          </div>
          <div className="image-content2" />
        </div>
        <div className="content-body buyers-content">
          <div className="text-content farmers-box">
            <h2 className="sub-title">LAND TENANCY</h2>
            <p className="content-text">
            Secure the ideal land for your farming operations with ease. Our platform simplifies the land leasing process,
             providing you with a range of options that match your specific requirements.
            Connect directly with landowners and explore diverse land opportunities to enhance your farming capabilities and boost productivity.
            </p>
            <Link to="/land" className="rounded-button">Land Connect</Link> {/* Rounded button */}
          </div>
          <div className="image-content3" />
        </div>
      </div>
    </>
  );
};

export default Homepage;
