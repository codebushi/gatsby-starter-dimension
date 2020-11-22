import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


const Header = props => {
  const handleClick = (article) => {
    setShowShareMenu(false);
    props.onOpenArticle(article);
  }
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const IS_MOBILE = windowDimensions.width < 1024; 
  return (
    <>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => handleClick('instructions')}
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
              onClick={() => setShowShareMenu(!showShareMenu)}
              disabled={props.isArticleVisible}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px'
              }}
            >
              Share
            </button>
            {showShareMenu ? (
              <div
                style={{
                  position: 'absolute',
                  top: IS_MOBILE ? '50px' : '80px',
                  right: '10px',
                  width: '7.5rem',
                  fontSize: '14px',
                  textAlign: 'center'
                }}
                className="post-social"
              >
                <FacebookShareButton url={'https://interculturalskillslab.com'} style={{height: 'inherit'}} >
                  <span className="icon">
                    <FacebookIcon size={IS_MOBILE ? 16 : 32} round={true} />
                  </span>
                </FacebookShareButton>
                <TwitterShareButton url={'https://interculturalskillslab.com'} className="is-rounded twitter" title={'MAPLE Beta'} style={{height: 'inherit'}} >
                  <span className="icon">
                    <TwitterIcon size={IS_MOBILE ? 16 : 32} round={true} />
                  </span>
                </TwitterShareButton>
                <LinkedinShareButton url={'https://interculturalskillslab.com'} className="is-rounded linkedin" title={'MAPLE Beta'} style={{height: 'inherit'}} >
                  <span className="icon">
                    <LinkedinIcon size={IS_MOBILE ? 16 : 32} round={true} />
                  </span>
                </LinkedinShareButton>
                <WhatsappShareButton url={'https://interculturalskillslab.com'} className="is-rounded whatsapp" title={'MAPLE Beta'} style={{height: 'inherit'}} >
                  <span className="icon">
                    <WhatsappIcon size={IS_MOBILE ? 16 : 32} round={true} />
                  </span>
                </WhatsappShareButton>
                <EmailShareButton url={'https://interculturalskillslab.com'} className="is-rounded email" title={'MAPLE Beta'} style={{height: 'inherit'}} >
                  <span className="icon">
                    <EmailIcon size={IS_MOBILE ? 16 : 32} round={true} />
                  </span>
                </EmailShareButton>
              </div>
            ) : null}
          </li>
          <li>
            <button
              onClick={() => handleClick('about')}
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
              onClick={() => handleClick('contact')}
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
          <div className="inner-logo"></div>
          <div className="inner">
            <h1>MAPLE</h1>
            <h2>A cultural assessment tool</h2>
            <h6>BETA VERSION</h6>
          </div>
        </div>
        <nav>
          <ul className="ul-border">
            <li>
              <button
                onClick={() => {
                  props.onOpenArticle('instructions')
                }}
              >
                Take The Test
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  isArticleVisible: PropTypes.bool
}

export default Header
