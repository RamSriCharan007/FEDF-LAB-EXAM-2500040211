import React, { useEffect, useState } from 'react';



const ProductList = () => {
  const [localUsers, setLocalUsers] = useState([]);
  

  useEffect(() => {
    // 3. Load Registered Users from LocalStorage
    const saved = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    setLocalUsers(saved);

  }, []);

  return (
    <div className="mt-4">
      <h2 className="mb-4">User List</h2>
      <div className="row">
        {/* LocalStorage List */}
        <div className="col-md-7">
          <h4>Registered Users List</h4>
          <table className="table table-bordered table-striped mt-3">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {localUsers.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.id}</td>
                  <td>{company.email}</td>
                  <td>{company.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
  );
};

export default ProductList;