import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [name, setName] = useState('');
  const [role,setRole]=useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', name,role, password);

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name,role, password: password }),
      });
       if (res.ok) {
        const text=await res.text();
        alert(text)
        if(role=='admin'){
          window.location.href='/adminDashboard';
        }
        else if(role=='volunteer'){
          window.location.href='/volunteerDashboard';
        }
        else{
          window.location.href='/familyDashboard';
        } // or use a router if using React Router
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
        <label for='role'>Role : </label>
        <select id='role' name='role' value={role} onChange={(e)=>setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="volunteer">Volunteer</option>
          <option value="family">Family</option>
        </select>
        <br/>
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
