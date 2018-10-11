import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import './layout.css'
import label from './layout.css'
import input from './layout.css'
import githubImg from '../assets/github.svg'
import twitterImg from '../assets/twitter.svg'
import linkedInImg from '../assets/linkedIn.svg'
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

        <div className="footer-text">
          <h6>COPYRIGHT 2018 - CODETHINKER</h6>
          <p className="mt">
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
  children: PropTypes.object,
}

export default Layout;








