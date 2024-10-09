import React, { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Categories from './component/Categories/Categories';
import Sellers from './component/Sellers/Sellers';
import Footer from './component/Footer/Footer';
import MyAccount from './component/MyAccount/MyAccount';
import CartPage from './component/CartPage/CartPage';
import OrderPage from './component/OrderPage/OrderPage';
import OrderHistory from './component/OrderHistory/OrderHistory';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductPage from './component/ProductPage/ProductPage';
import { CartProvider } from './component/CartContext/CartContext';
import AdminDashboard from './component/AdminDashboard/AdminDashboard';
import ManageCustomers from './component/AdminManageCustomers/ManageCustomers';
import Products from './component/AdminProducts/Products';
import ViewOrders from './component/AdminViewOrders/ViewOrders';
import SellersAdmin from './component/AdminSellers/Sellers'; // Admin Sellers
import CategoriesAdmin from './component/AdminCategories/Categories'; // Admin Categories

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track logged-in status
  const [activeTab, setActiveTab] = useState('categories'); // State for active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header /> {/* Move Header outside of the Routes to display it on all pages */}
          <Routes>
            {/* Redirect to the login page when the user is not logged in */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* Login route */}
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

            {/* Register route */}
            <Route path="/register" element={<Register />} />

            {/* Protected routes that require login */}
            {isLoggedIn ? (
              <>
                <Route path="/home" element={
                  <>
                    <Banner />
                    <div className="tab-row">
                      <div className="tab-header center-text">
                        <h1
                          onClick={() => handleTabChange('categories')}
                          className={activeTab === 'categories' ? 'active' : ''}
                        >
                          Categories
                        </h1>
                        <h1
                          onClick={() => handleTabChange('sellers')}
                          className={activeTab === 'sellers' ? 'active' : ''}
                        >
                          Sellers
                        </h1>
                      </div>
                    </div>

                    {activeTab === 'categories' && <Categories />}
                    {activeTab === 'sellers' && <Sellers />}
                    
                    <img src="images/megasale.jpg" alt="MegaSale" className="mega-sale" />
                    <Footer />
                  </>
                }/>
                <Route path="/category/:categoryName" element={<ProductPage />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/order-history" element={<OrderHistory />} />
              </>
            ) : (
              // Redirect to login for all other routes
              <Route path="*" element={<Navigate to="/login" />} />
            )}

            {/* Admin Routes (accessible without login) */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/sellers" element={<SellersAdmin />} />
            <Route path="/admin/categories" element={<CategoriesAdmin />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/managecustomers" element={<ManageCustomers />} />
            <Route path="/admin/vieworders" element={<ViewOrders />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
