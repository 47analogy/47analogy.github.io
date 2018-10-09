import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Media from 'react-media' //use this for media queries
import './layout.css'
import label from './layout.css'
import input from './layout.css'
import githubImg from '../assets/github.svg'
import twitterImg from '../assets/twitter.svg'
import linkedInImg from '../assets/linkedIn.svg'
// import buttonSubmit from './layout.css'

// import Header from './header'
// import './../scss/index.scss' use this for sass

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
        <div className="menu-list">
          <nav>
            <Link to="/">Home</Link>
            <Link to="#about-section">About</Link>
            <Link to="#blog-section">Blog</Link>
            <Link to="#project-section">Projects</Link>
            <Link to="#contact-section">Contact</Link>
          </nav>
        </div>
      </div>
      {children}

      <div className="footer">
        <div id="contact-section">
          <div className="contact-info">
            <h3>Let's Talk!</h3>
            <form action="//formspree.io/atweed47@yahoo.com" method="POST">
              <div className="form-container">
                <div className="form">
                  <div className="outer">
                    <div className="contact-info"><label className="label" htmlFor="name">Name</label>
                      <input className="input" type="text" placeholder="Your name..." name="name" /></div>
                    <div className="two"><label className="label" htmlFor="_replyto">Email</label>
                      <input className="input" type="email" placeholder="Your email..." name="_replyto" /></div>
                  </div>
                  <div className="inner">
                    <div className="contact-message"> <label className="message" htmlFor="message">Message</label>
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
          <p classNameName="mt">
            <a href="https://www.linkedin.com/in/anthony-tweed/"><img className="linkedIn-img" src={linkedInImg} height="40" alt="LinkedIn" /></a>
            <a href="https://github.com/47analogy"><img className="github-img" src={githubImg} height="40" alt="GitHub" /></a>
            <a href="https://twitter.com/atweed47"> <img className="twitter-img" src={twitterImg} height="40" alt="Twitter" /></a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout;








