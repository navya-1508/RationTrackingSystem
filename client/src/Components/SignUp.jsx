import React,{useState} from 'react'
import './SignUp.css'
export default function SignUp() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('');
    const eventhandle=async (e)=>{
        e.preventDefault();
        console.log(name,password,confirmpassword);
        try{
        const res=await fetch('http://localhost:3000/signup',{
          method:'POST',
          headers:{'Content-Type': 'application/json' },
          body:JSON.stringify({username:name,password,confirmpassword}),
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
    <div>
      <form onSubmit={eventhandle} className='form'>
        <h1>SingUp Here</h1>
        <label>Username : </label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
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
