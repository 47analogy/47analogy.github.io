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
        <div className="contact-container">
          {/* <div className="contact-info"> */}
          <h3>Contact Me</h3>
          <form action="//formspree.io/atweed47@yahoo.com" method="POST">
            <div className="form-container">
              <div className="form">
                <div className="outer">
                  <div className="one"><label className="label" htmlFor="name">Name</label>
                    <input className="input" type="text" placeholder="Your name..." name="name" /></div>
                  <div className="two"><label className="label" htmlFor="_replyto">Email</label>
                    <input className="input" type="email" placeholder="Your email..." name="_replyto" /></div>
                </div>
                <div className="inner">
                  <div className="two"> <label className="message" htmlFor="message">Message</label>
                    <textarea rows="4" cols="47" className="messagearea" type="text" placeholder="Message..." name="message"></textarea>
                  </div>
                  <div className="buttonSubmit">
                    <input type="submit" value="Send" />
                    <input
                      type="hidden"
                      name="_subject"
                      value="Message via http://anthonytweed.com"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-text">
        <h6>COPYRIGHT 2018 - CODETHINKER</h6>

        {/* <p classNameName="mt">
  <a href="#"><i classNameName="ion-social-twitter"></i></a>
  <a href="#"><i classNameName="ion-social-instagram"></i></a>
  <a href="#"><i classNameName="ion-social-facebook"></i></a>
</p> */}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout;


