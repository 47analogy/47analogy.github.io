import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'



import Header from './header'
import './layout.css'

// import './../scss/index.scss'
import label from './layout.css'
import input from './layout.css'
import buttonSubmit from './layout.css'


const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Anthony Tweed"
      meta={[
        { name: 'description', content: 'portfolio' },
        { name: 'keywords', content: 'anthony, tweed', },
      ]}
    />
    <div>
      <div className="menu">
        <div className="logo">CODETHINKER</div>
        <div className="menu-list hidden-xs">
          {/* <nav> */}
          <Link to="/">Home</Link>
          <Link to="#about-section">About</Link>
          <Link to="#blog-section">Blog</Link>
          <Link to="#projects-section">Projects</Link>
          <Link to="#contact-section">Contact</Link>
          {/* </nav> */}
        </div>
        <div className="clear"></div>
      </div>
      {children}
      <div className="footer">
        <div className="container">
          <div className="row centered">
            <h3>Contact Me</h3>
            {/* <h3>Form Goes Here</h3> */}
            <form
              action="//formspree.io/atweed47@yahoo.com"
              method="POST"
            >
              <label className={label} htmlFor="name">Name</label>
              <input
                className={input}
                type="text"
                placeholder="Your name..."
                name="name"
              />


              <label className={label} htmlFor="_replyto">Email</label>
              <input
                className={input}
                type="email"
                placeholder="Your email..."
                name="_replyto"
              />


              <label className="message" htmlFor="message">Message</label>
              <textarea
                className={input}
                name="message"
                rows="3"
                placeholder="Message..."
              />




              <button >
                <input className="buttonSubmit" type="submit" value="Send" />
              </button>


              <input
                type="hidden"
                name="_subject"
                value="Message via http://anthonytweed.com"
              />

            </form>


            {/* add social media here */}
            <h5>ACTWEED47@GMAIL.COM</h5>

            {/* <p className="mt">
              <a href="#"><i className="ion-social-twitter"></i></a>
              <a href="#"><i className="ion-social-instagram"></i></a>
              <a href="#"><i className="ion-social-facebook"></i></a>
            </p> */}
            <h6 className="mt">COPYRIGHT 2018 - CODETHINKER</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;


