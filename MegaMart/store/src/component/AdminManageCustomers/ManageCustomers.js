// src/components/ManageCustomers.js
import React, { useState, useEffect } from 'react';
import './ManageCustomers.css';

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customer data from an API or database
    // For demo, using hardcoded data
    const fetchedCustomers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
      // Add more customer objects as needed
    ];
    setCustomers(fetchedCustomers);
  }, []);

  const handleToggleStatus = (id) => {
    setCustomers(customers.map(customer => 
      customer.id === id ? { ...customer, status: customer.status === 'Active' ? 'Inactive' : 'Active' } : customer
    ));
  };

  return (
    <div className="manage-customers">
      <h1>Manage Customers</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.status}</td>
              <td>
                <button onClick={() => handleToggleStatus(customer.id)}>
                  {customer.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCustomers;
