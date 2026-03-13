import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    id:'',
    email: '', 
    gender: '',
    password: '' 
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Add new user to the array
    localStorage.setItem('registeredUsers', JSON.stringify([...existingUsers, formData]));
    
    alert('User Registered Successfully!');
    setFormData({ name: '',id:'', email: '', gender: '', password: '' }); // Clear form
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
            <label>ID</label>
            <input type="text" value={formData.id} required
            onChange={e => setFormData({...formData,id: e.target.value})} />
        </div>
        
        <div className="mb-3">
          <label>Email Address</label>
          <input type="email" className="form-control" value={formData.email} required
            onChange={e => setFormData({...formData, email: e.target.value})} />
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select className="form-select" value={formData.gender} required
            onChange={e => setFormData({...formData, gender: e.target.value})}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
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