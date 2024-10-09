// src/component/AdminLogin/AdminLogin.js
import React, { useState } from 'react';
import './AdminAuth.css'; // Import CSS file

function AdminLogin({ setIsAdminLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    if (username === 'admin' && password === 'password') { // Replace with your actual authentication logic
      setIsAdminLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-auth-container">
      <h2>Admin Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/admin/register">Register</a></p> {/* Link to Register */}
    </div>
  );
}

export default AdminLogin;
