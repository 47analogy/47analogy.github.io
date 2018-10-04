import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Media from 'react-media' //use this for media queries
import './layout.css'
import label from './layout.css'
import input from './layout.css'
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
        {/* <div className="clear"></div> */}
      </div>
      {children}




    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout;


{/* <div className="footer">
        <div id="contact-section"> */}
{/* <div className="contact-info"> */ }
{/* <h3>Let's Talk!</h3> */ }
{/* <form action="//formspree.io/atweed47@yahoo.com" method="POST">
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
          </form> */}
{/* </div>
      </div> */}
{/* <div className="footer-text">
        <h6>COPYRIGHT 2018 - CODETHINKER</h6>

         <p classNameName="mt">
  <a href="#"><i classNameName="ion-social-twitter"></i></a>
  <a href="#"><i classNameName="ion-social-instagram"></i></a>
  <a href="#"><i classNameName="ion-social-facebook"></i></a>
</p> 
      </div> 
      */}



