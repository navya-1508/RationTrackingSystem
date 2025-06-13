import React,{useState} from 'react'
import './SignUp.css'
export default function SignUp() {
    const [name,setName]=useState('');
    const [role,setRole]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('');
    const eventhandle=async (e)=>{
        e.preventDefault();
        console.log(name,role,password,confirmpassword);
        try{
        const res=await fetch('http://localhost:3000/signup',{
          method:'POST',
          headers:{'Content-Type': 'application/json' },
          body:JSON.stringify({username:name,role,password,confirmpassword}),
        });
        if (res.ok) {
        const text=await res.text();
        alert(text)
      window.location.href = '/login'; // or use a router if using React Router
    } else {
      const errorText = await res.text();
      alert(errorText);
    }
      }
      catch(error){
        console.log("Error occured in signup data",error);
      }
    }
  return (
    <div className='signupform'>
      <form onSubmit={eventhandle} className='form'>
        <h1>SignUp Here</h1>
        <label>Username : </label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <br/>
        <label for='role'>Role : </label>
        <select id='role' name='role' value={role} onChange={(e)=>setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="volunteer">Volunteer</option>
          <option value="family">Family</option>
        </select>
        <br/>
        <label>Password : </label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <br/>
        <label>Confirm Password : </label>
        <input type='password' value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}></input>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
