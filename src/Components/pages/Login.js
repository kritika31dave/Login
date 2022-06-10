import axios from 'axios'
import React, { useState } from 'react'
import "./Login.css"
function Login() {
  const[email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const handleClick=()=>{
    axios.post('https://reqres.in/api/login',{
      email:email,
      password:pass
    })
    .then(result=>{
      console.log(result)
      alert("user is succesfully logged in")
    }).catch(error=> {
      console.log(error)
      alert("oops! some error")
    })
  }
  return (
    <div className="loginDiv">
    <div className='form'>
    <div className='head'>
    <h3>Welcome Back</h3>
    </div>
      <input type="text" className="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <input type="password" className='pass' placeholder="password" onChange={(e)=>setPass(e.target.value)} value={pass}/>
      <button className='butt' onClick={handleClick}>Login</button>
      <div className='box'>
      <label className="container" >
       <input type="checkbox"/>
       <span className="mark"></span>Remember me
       </label>
       <a href="#">Forgot Password?</a>
      </div>
       
    </div>
    <div className='image'></div>
    </div>
  )
}

export default Login