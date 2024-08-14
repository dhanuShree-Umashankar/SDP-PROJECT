import React, { useState } from 'react';
import './DonationPayment.css';

const DonationPayment = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [orgType, setOrgType] = useState('Public limited company');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [panCard, setPanCard] = useState('');
  const [registrationNo, setRegistrationNo] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div className="donation-payment-form">
      <h2>Donation Payment</h2>
      <div className="form-group">
        <label>Amount:</label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Currency:</label>
        <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Organization Type:</label>
        <input type="text" value={orgType} onChange={(e) => setOrgType(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Designation:</label>
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Mobile No.:</label>
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      </div>
      <div className="form-group">
        <label>PAN Card Number:</label>
        <input type="text" value={panCard} onChange={(e) => setPanCard(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Registration No.:</label>
        <input type="text" value={registrationNo} onChange={(e) => setRegistrationNo(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Website:</label>
        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Comment:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      <div className='buttoonn'>
      <button>Donate</button>
      </div>
    </div>
  );
};

export default DonationPayment;
