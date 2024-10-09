import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './component/AdminDashboard/AdminDashboard';
import Sellers from './component/AdminSellers/Sellers';
import Categories from './component/AdminCategories/Categories';
import Products from './component/AdminProducts/Products';
import ManageCustomers from './component/AdminManageCustomers/ManageCustomers';
import ViewOrders from './component/AdminViewOrders/ViewOrders';
import './App1.css';  // Import global CSS if you have one

function App1() {
  return (
    <Router>
      <div className="app1">
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/sellers" element={<Sellers />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/managecustomers" element={<ManageCustomers />} />
          <Route path="/admin/vieworders" element={<ViewOrders />} />
          <Route path="*" element={<AdminDashboard />} />  {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App1;
