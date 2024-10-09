// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Retrieve the stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the user exists and the credentials match
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setError(''); // Clear any previous error

      // Set logged in state
      setIsLoggedIn(true);

      // Navigate to the home page
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleLogin}>
        <h2 style={{ color: 'rgb(85, 4, 101)' }}>Login</h2>

        <label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Login</button>

        <p className="small-text">
          If not registered, <a href="/register">go to register page</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
