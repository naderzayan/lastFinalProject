import React from 'react'
import '../style/components/_login.scss'
import { Link } from 'react-router'

export default function Login() {
  return (
      <div className="form">
          <div className="login_box">
              <h2>Login</h2>
              <form action="#">
                  <div className="input_box">
                      <input type="email" required />
                      <label>Email</label>
                  </div>
                  <div className="input_box">
                      <input type="password" required />
                      <label>password</label>
                  </div>
                  <div className="forgot_pass">
                      <Link>Forgot your password?</Link>
                  </div>
                  <button type="submit" className="btn">
                      Login
                  </button>
                  <div className="signup_link">
                      <Link>Signup</Link>
                  </div>
              </form>
          </div>
      </div>
  );
}
