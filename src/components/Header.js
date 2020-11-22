import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => props.onOpenArticle('intro')}
            disabled={props.isArticleVisible}
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px'
            }}
          >
            Instructions
          </button>
        </li>
        <li>
          <button
            onClick={() => props.onOpenArticle('share')}
            disabled={props.isArticleVisible}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px'
            }}
          >
            Share
          </button>
        </li>
        <li>
          <button
            onClick={() => props.onOpenArticle('about')}
            disabled={props.isArticleVisible}
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px'
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => props.onOpenArticle('contact')}
            disabled={props.isArticleVisible}
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px'
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo"></div>
      <div className="content">
        <div class="inner-logo"></div>
        <div className="inner">
          <h1>MAPLE</h1>
          <h2>A cultural assessment tool</h2>
          <h6>BETA VERSION</h6>
        </div>
      </div>
      <nav>
        <ul class="ul-border">
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Take The Test
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
