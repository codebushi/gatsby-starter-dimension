import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
     <p className="copyright">Image by <a href="https://pixabay.com/users/tommyvideo-3092371/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1779559">Tomislav Jakupec</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1779559">Pixabay</a>  </p> 
    <a href="https://github.com/adunis/adunis-portfolio" className="icon fa-github"><span className="label">Code </span></a>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
