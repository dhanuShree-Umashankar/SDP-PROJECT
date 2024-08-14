import React from 'react';
import { Navbar, Nav,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import your custom CSS

const NavbarComponent = () => {
  return (
    <Navbar  expand="lg" className='navbar'>
      <Navbar.Brand as={Link} to="/">
      <div className="logo"></div>
      <div className="brand-text">
          FarmAssist
          {/* <div className="tagline">Empowering Farmers, Enabling Growth</div> */}
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/Buyer">Seller</Nav.Link>
          <Nav.Link as={Link} to="/Seller">Buyer</Nav.Link>
          <Nav.Link as={Link} to="/Land">Land Tenancy</Nav.Link>

          {/* <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
