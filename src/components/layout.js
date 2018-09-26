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
              <div className="contact-box">
                <div className="contact">
                  <div className="box-left">
                    <label className="label" htmlFor="name">Name</label>
                    <input
                      className="input"
                      type="text"
                      placeholder="Your name..."
                      name="name"
                    />
                  </div>
                  <div className="box-left">
                    <label className="label" htmlFor="_replyto">Email</label>
                    <input
                      className="input"
                      type="email"
                      placeholder="Your email..."
                      name="_replyto"
                    />
                  </div>
                  <div className="box">
                    <label className="message" htmlFor="message">Message</label>
                    <textarea
                      className="messagearea"
                      type="text"
                      name="message"
                      rows="4"
                      columns="9"
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

                  </div>


                </div>

                {/* <div className="box">
                  <label className="message" htmlFor="message">Message</label>
                  <textarea
                    className="messagearea"
                    type="text"
                    name="message"
                    rows="4"

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

                </div> */}
              </div>
            </form>


            {/* add social media here */}
            <h5>ACTWEED47@GMAIL.COM</h5>

            {/* <p classNameName="mt">
              <a href="#"><i classNameName="ion-social-twitter"></i></a>
              <a href="#"><i classNameName="ion-social-instagram"></i></a>
              <a href="#"><i classNameName="ion-social-facebook"></i></a>
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


