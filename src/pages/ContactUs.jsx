import React from 'react'
import "../style/_contactUs.scss";

export default function ContactUs() {
  return (
      <main className="mainOfContact">
          <div>
              <img src="Call-Center-Agents.jpg" alt="" className="image" />
          </div>
          <div className="dataOfContact">
              <h1>Leave a Reply</h1>
              <p> email address will not be published.</p>
              <p>Required fields are marked *</p>
              <div className="mainOfinput">
                  <input type="email" name="" id="" placeholder="Enter Email Here *" className="input" />
              </div>
              <div className="mainOfinput">
                  <input type="text" name="" id="" placeholder="Type Your Comment Here *" className="input" />
              </div>
              <div className="check">
                  <input type="checkbox" name="" id="" />
                  <p>Save my email in this browser</p>
              </div>
              <button type="submit">submit</button>
          </div>
      </main>
  );
}
