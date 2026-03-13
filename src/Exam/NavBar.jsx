import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import APIDemo from './APIDemo'
import Registration from './Registration'
import ProductList from './ProductList';


export default function NavBar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/api-demo">API Demo</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/product-list">Product List</Link>
        
        <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/api-demo" element={<APIDemo />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/product-list" element={<ProductList />} />
        </Routes>
    </div>
  )
}
