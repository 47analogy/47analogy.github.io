import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './layout.css'
import favicon from '../assets/favicon.ico'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Anthony Tweed"
      meta={[
        { name: 'description', content: 'portfolio' },
        { name: 'keywords', content: 'anthony, tweed' },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    <div>{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
