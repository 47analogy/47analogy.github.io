import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Header from '../components/header'
import './index.css'
// import './../scss/index.scss'
import label from './index.css'
import input from './index.css'
import buttonSubmit from './index.css'

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
          <Link to="/">HOME</Link>
          <Link to="#about-section">ABOUT</Link>
          <Link to="#blog-section">Blog</Link>
          <Link to="#projects-section">Projects</Link>
          <Link to="#contact-section">Contact</Link>
          {/* </nav> */}
        </div>
        <div className="clear"></div>
      </div>
      {children()}
      <div className="footer">
        <div className="container">
          <div className="row centered">
            <h2>Contact Me</h2>
            {/* <h3>Form Goes Here</h3> */}
            <form
              action="//formspree.io/atweed47@yahoo.com"
              method="POST"
            >
              <label className={label} htmlFor="name">
                <input
                  className={input}
                  type="text"
                  placeholder="your name"
                  name="name"
                />
              </label>

              <label className={label} htmlFor="_replyto">
                <input
                  className={input}
                  type="email"
                  placeholder="your email"
                  name="_replyto"
                />
              </label>

              <label className="message" htmlFor="message">
                <textarea
                  className={input}
                  name="message"
                  rows="3"
                  placeholder="Message"
                />
              </label>

              {/* <label>
                <buttonSubmit
                  type="submit"
                  value="send"
                />
              </label> */}

              {/* <buttonSubmit type="submit">Send</buttonSubmit> */}

              {/* <button className={button} type="submit" value="Send"
             /> */}

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
