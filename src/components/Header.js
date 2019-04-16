import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
    
        <div className="content">
            <div className="inner">
                <h1>Aleksandar Petrovic</h1>
                <p>I'm a UX Researcher/Designer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>My Works</a></li>
                 <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact me</a></li>
              
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
