import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDashboard.css';

const products = [
  { name: 'Tomatoes', quantity: '10 kg', price: '$20', seller: 'John Doe', contact: '123-456-7890', type: 'veg1' },
  { name: 'Potatoes', quantity: '15 kg', price: '$15', seller: 'Jane Doe', contact: '123-456-7891', type: 'veg2' },
  { name: 'Carrots', quantity: '20 kg', price: '$25', seller: 'Jim Doe', contact: '123-456-7892', type: 'veg3' },
  { name: 'Lettuce', quantity: '12 kg', price: '$18', seller: 'Jill Doe', contact: '123-456-7893', type: 'veg4' },
  { name: 'Apples', quantity: '8 kg', price: '$30', seller: 'John Smith', contact: '123-456-7894', type: 'fruit1' },
  { name: 'Bananas', quantity: '10 kg', price: '$25', seller: 'Jane Smith', contact: '123-456-7895', type: 'fruit2' },
  { name: 'Oranges', quantity: '9 kg', price: '$28', seller: 'Jim Smith', contact: '123-456-7896', type: 'fruit3' },
  { name: 'Grapes', quantity: '7 kg', price: '$32', seller: 'Jill Smith', contact: '123-456-7897', type: 'fruit4' }
];

const ProductDashboard = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/addproduct');
  };

  const handleCardClick = (product) => {
    navigate('/orderrequest', { state: { product } });
  };

  return (
    <div className="product-dashboard">
      <button onClick={handleAddProduct} className="add-product-button">
        Add Product
      </button>
      <div className="category-heading">Vegetables</div>
      {products.filter(product => product.type.startsWith('veg')).map((product, index) => (
        <div
          key={index}
          className={`product-card ${product.type}`}
          onClick={() => handleCardClick(product)}
        >
          <div className="product-details">
            <div className="product-name">{product.name}</div>
            <div className="product-quantity">Quantity: {product.quantity}</div>
            <div className="product-price">Price: {product.price}</div>
            <div className="product-seller">Seller: {product.seller}</div>
            <div className="product-contact">Contact: {product.contact}</div>
          </div>
        </div>
      ))}
      <div className="category-heading">Fruits</div>
      {products.filter(product => product.type.startsWith('fruit')).map((product, index) => (
        <div
          key={index}
          className={`product-card ${product.type}`}
          onClick={() => handleCardClick(product)}
        >
          <div className="product-details">
            <div className="product-name">{product.name}</div>
            <div className="product-quantity">Quantity: {product.quantity}</div>
            <div className="product-price">Price: {product.price}</div>
            <div className="product-seller">Seller: {product.seller}</div>
            <div className="product-contact">Contact: {product.contact}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDashboard;
