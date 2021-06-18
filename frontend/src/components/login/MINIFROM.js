import React from 'react'
import {useState} from 'react'
import "./auth.css"
import axios from 'axios'
import Main from '../Main'
import { Redirect } from 'react-router'
function MINIFROM() {
  


  const url = "http://localhost:9000"
  const [logins, setlogin] = useState({
    firstName: "",
    password: ""

  })

  function submit() {
    // e.preventDefault();
    axios.post(url, {
      firstName: logins.firstName,
      password: logins.password
    }).then(res => {
        <Redirect to path = '/Main'/>
      })
  }

  return (
    <div className="login-box animated fadeInUp">
      <div className="box-header">
        <h2>Log In</h2>
      </div>
      <label htmlFor="username">Username</label>
      <br />
      <input type="email" id="username" required />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" id="password" required />
      <br />
      <button type="submit" onSubmit={()=>submit}>Sign In</button>
      <br />
      <a href="#"><p className="small">Forgot your password?</p></a>
    </div>
  )
}

export default MINIFROM
