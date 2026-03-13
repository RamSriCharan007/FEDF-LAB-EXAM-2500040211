import React, { useState } from 'react'
import "./Registration.css"

const Registration = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    product:'',
    quantity: '', 
    password: '' 
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('Product') || '[]');
    
    // Add new user to the array
    localStorage.setItem('Product', JSON.stringify([...existingUsers, formData]));
    
    alert('User Registered Successfully!');
    setFormData({ name: '',product:'', email: '', gender: '', password: '' }); // Clear form
  };

  return (
    <div className="card shadow-sm p-4 mt-5 mx-auto" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">Create Account</h3>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control" value={formData.name} required
            onChange={e => setFormData({...formData, name: e.target.value})} />
        </div>
        <div>
            <label>Product</label>
            <input type="text" value={formData.product} required
            onChange={e => setFormData({...formData,product: e.target.value})} />
        </div>
        
        <div className="mb-3">
          <label>Quantity</label>
          <input type="number" className="form-control" value={formData.quantity} required
            onChange={e => setFormData({...formData, quantity: e.target.value})} />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={formData.password} required
            onChange={e => setFormData({...formData, password: e.target.value})} />
        </div>

        <button className="btn btn-primary w-100 mt-2">Register Now</button>
      </form>
    </div>
  );
};

export default Registration;