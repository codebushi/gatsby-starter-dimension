import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Photo by Trần Anh Tuấn on Unsplash  </p> 
  <a href="https://github.com/adunis/adunis-portfolio" className="icon fa-github"><span className="label">Code </span></a>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
