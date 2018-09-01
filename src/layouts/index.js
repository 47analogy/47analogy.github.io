import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
// import Header from '../components/header'
import './index.css'
// import './../scss/index.scss'

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
          <Link to="/">Home</Link>
          <Link to="#">Abouts</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Projects</Link>
          <Link to="#">Contact</Link>
        </div>
        <div className="clear"></div>
      </div>
      {children()}
      <div className="footer">
        <div className="container">
          <div className="row centered">
            <h2>Contact Me</h2>
            <h3>Form Goes Here</h3>
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
