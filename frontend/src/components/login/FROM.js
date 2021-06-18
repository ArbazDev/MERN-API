import React, { useState,render,Redirect } from 'react';
import axios from 'axios';
import './auth.css';
import Main from '../Main'



function FROM() {
  const url = "http://localhost:9000/registration"
  const [logins, setlogins] = useState({
    firstName: "",
    lastName: "",
    emails: "",
    password: ""

  })

  function submit(e, req, res) {
    e.preventDefault();
    axios.post(url, {
      firstName: logins.firstName,
      lastName: logins.lastName,
      emails: logins.emails,
      password: logins.password
    }).then(res, state => {
      state = { redirect: null };
      render();{
        if (this.state.redirect) {
          return <Redirect to={Main.state.redirect} />
        }
        return (
          <div>console.log('user here')</div>
      )
      }
    })
    function handle(e) {
      const newData = { ...logins };
      newData[e.target.id] = e.target.value;
      setlogins(newData);
      console.log(newData)
    }
    return (
      <div>
        <div className="main">
          <div className="wrap">
            <div className="top-one">
              <div className="login-one">
                <div className="create-account">
                  <div className="login-head">
                    <h2>Create Account</h2>
                    <span className="line">
                      <span className="sub-line" />
                    </span>
                  </div>
                  <form onSubmit={(e) => (submit(e))}>
                    <p>First Name <lable> *</lable></p>
                    <input type="text" className="text" onChange={(e) => handle(e)} id='firstName' value={logins.firstName} onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" />
                    <p>Last Name <lable> *</lable></p>
                    <input type="text" className="text" onChange={(e) => handle(e)} id='lastName' value={logins.lastName} onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" />
                    <p>Email Address <lable> *</lable></p>
                    <input type="text" className="text" onChange={(e) => handle(e)} id='emails' value={logins.emails} onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" />
                    <p>Password <lable> *</lable></p>
                    <input type="password" onChange={(e) => handle(e)} id='password' value={logins.password} onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" />
                    <div className="sign-up">
                      <input type="reset" defaultValue="Clear" />
                      <input type="submit" onclick="submit()" defaultValue="Register" />
                      {/* <div id="small-dialog2" className="mfp-hide">
                      <div className="signup">
                        <h3>Signup</h3>
                        <h4><a href="#">let's get started</a></h4>
                        <p>Email</p>
                        <input type="text" className="email" placeholder="Email adress" required />
                        <p>Password</p>
                        <input type="password" placeholder="Password" required />
                        <div className="p-container">
                          <label className="checkbox two"><input type="checkbox" name="checkbox" defaultChecked /><i />Keep me logged in</label>
                        </div>
                        <input type="submit" defaultValue="LOG IN" />
                      </div>
                    </div>   */}
                    </div>
                  </form>

                  <div className="wrapper">
                    <div className="box">
                      <input type="radio" name="select" id="option-1" />
                      <input type="radio" name="select" id="option-2" />
                      <label htmlFor="option-1" className="option-1">
                        <div className="dot" />
                        <div className="text">Registered as a Buyer</div>
                      </label>
                      <label htmlFor="option-2" className="option-2">
                        <div className="dot" />
                        <div className="text">Registered as a Rider</div>
                      </label>
                    </div>
                  </div>
                  <div className="clear"> </div>
                  <h5>Do you have an account yet ? <a className="signup play-icon popup-with-zoom-anim" href="#small-dialog2">Login</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FROM
