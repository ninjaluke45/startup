import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = {
          email: name,
          password: password
        };
  
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        const data = await response.json();
  
        if (data.ok) {
          // Successful login or user creation
          console.log('User ID:', data.id);
        //   alert('User ID:' + data.id);
          // Handle redirect or other actions for successful login
          localStorage.setItem('token', data.id);
          navigate('/lobby');
        } else {
          // Handle error messages (Unauthorized, Existing user, etc.)
          console.error('Error:', data.msg);
          // Display an error message to the user
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error:', error.message);
        // Handle other types of errors (network, server, etc.)
      }
    };
  
    return (
      <main>
        <h1>Welcome</h1>
        <p>Login to play</p>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </main>
    );
  }