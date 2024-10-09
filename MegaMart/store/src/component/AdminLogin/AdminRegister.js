// src/component/AdminRegister/AdminRegister.js
import React, { useState } from 'react';
import './AdminAuth.css'; // Import CSS file

function AdminRegister({ setIsAdminLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    setIsAdminLoggedIn(true); // For now, we will just set isAdminLoggedIn to true
  };

  return (
    <div className="admin-auth-container">
      <h2>Admin Register</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default AdminRegister;
