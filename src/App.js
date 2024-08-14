import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import Homepage from './pages/Homepage';
// import Contact from './pages/Contact';
import Buyer from './pages/Buyer';
import Login from './pages/Login';
import Footers from './components/Footers';
import RegisterSeller from './pages/RegisterSeller';
// import Categories from './pages/Categories';
import AddProduct from './pages/AddProduct';
// import ProductDashboard from './pages/ProductDashboard';
import Seller from './pages/Seller';
import OrderRequest from './pages/OrderRequest';
import Land from './pages/Land';
import PostProperty from './pages/PostProperty';
import BuyerRegister from './pages/BuyerRegister';
import BuyerLogin from './pages/BuyerLogin';
import PDbuyer from './pages/PDbuyer';
import Faqpage from './pages/Faqpage';
import LandLogin from './pages/LandLogin';
import OwnerLogin from './pages/OwnerLogin';
import OwnerReg from './pages/OwnerReg';
import ProductListPage from './pages/ProductListPage';
import Categoriesss from './pages/Categoriesss';
import BuyerProductPage from './pages/BuyerProductPage';
import PostForm from './pages/PostForm';
const App = () => {
  return (
    <Router>
      <NavbarComponent />
      {/* <div style={{ marginTop: "24px" }}></div> */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/Register-seller" element={<RegisterSeller />} />
        {/* <Route path="/Categories" element={<Categories />} /> */}
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/ProductDashboard" element={<ProductDashboard />} /> */}
        <Route path="/Seller" element={<Seller />} />
        <Route path="/OrderRequest" element={<OrderRequest />} />
        <Route path="/Land" element={<Land />} />
        <Route path="/PostProperty" element={<PostProperty />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path='/BuyerRegister' element={<BuyerRegister />} />
        <Route path='/BuyerLogin' element={<BuyerLogin />} />
        <Route path='/PDbuyer' element={<PDbuyer />} />
        <Route path='/Faqpage' element={<Faqpage />} />
        <Route path='/LandLogin' element={<LandLogin />} />
        <Route path='/OwnerLogin' element={<OwnerLogin />} />
        <Route path='/OwnerReg' element={<OwnerReg />} />
        <Route path='/ProductListPage' element={<ProductListPage />} />
        <Route path='/Categoriesss' element={<Categoriesss />} />
        <Route path='/BuyerProductPage' element={<BuyerProductPage />} />
        <Route path='/PostForm' element={<PostForm />} />

      </Routes>
      
      <Footers />
    </Router>
  );
};

export default App;
