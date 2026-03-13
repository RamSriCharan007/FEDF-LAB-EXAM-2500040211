import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './NavBar.css'; // Don't forget to import the CSS file!

import Home from './Home';
import APIDemo from './APIDemo';
import Registration from './Registration';
import ProductList from './ProductList';

export default function NavBar() {
  return (
    <div className="navbar-container">
      {/* Navigation Bar Section */}
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/api-demo" className="nav-link">API Demo</Link>
        <Link to="/registration" className="nav-link">Registration</Link>
        <Link to="/product-list" className="nav-link">Product List</Link>
      </nav>

      {/* Main Page Content Section */}
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/api-demo" element={<APIDemo />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/product-list" element={<ProductList />} />
        </Routes>
      </main>
    </div>
  );
}