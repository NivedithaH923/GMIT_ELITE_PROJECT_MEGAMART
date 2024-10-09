// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    // Ensure both passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Store the user details in localStorage
    const user = {
      username: username,
      password: password
    };

    // Store the user in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Navigate to the login page after successful registration
    navigate('/login');
  };

  return (
    <div>
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>

        <label>
          <input
            type="text"
            name="username"
            placeholder="Username"
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
