import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', name, password);

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, password: password }),
      });
       if (res.ok) {
        const text=await res.text();
        alert(text)
        window.location.href = '/'; // or use a router if using React Router
    } else {
      const errorText = await res.text();
      alert(errorText);
    }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='loginform'>
      <form onSubmit={handleSubmit} className='form'>
        <h1>Login Here</h1>
        <label>Username: </label>
        <input
          value={name}
          name='username'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Password: </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
