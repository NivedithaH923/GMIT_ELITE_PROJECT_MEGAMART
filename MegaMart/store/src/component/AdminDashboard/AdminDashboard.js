import React from 'react';
import { Link } from 'react-router-dom';


import './AdminDashboard.css'; // Import the CSS file
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/admin/sellers">Manage Sellers</Link>
        <Link to="/admin/categories">Manage Categories</Link>
        <Link to="/admin/products">Manage Products</Link>
        <Link to="/admin/managecustomers">Manage Customers</Link>
        <Link to="/admin/vieworders">View Orders</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
