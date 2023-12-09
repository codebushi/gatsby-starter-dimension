import PropTypes from 'prop-types'
import React from 'react'
import * as Constants from './Constants'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Clement Tse</h1>
        <p>
          <b>Seasoned Strategic Advisor and Product Management Leader</b>
          <br />
          Transforming businesses and products by uncovering
          <br />
          <em>"What If the Impossible isn't"</em>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle(Constants.INTRO_PAGE)
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle(Constants.WORK_PAGE)
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle(Constants.ABOUT_PAGE)
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle(Constants.CONTACT_PAGE)
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
