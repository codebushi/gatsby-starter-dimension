import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from "gatsby";
import { useMedia } from 'react-media';
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

const shareMsg = 'My MAPLE cultural assessment profile gave me some good insight into how my cultural values impact my behaviour. Take the test and discover your profile at';
const LandingHeader = props => {
  const handleClick = (article) => {
    setShowShareMenu(false);
    props.onOpenArticle(article);
  }
  const [showShareMenu, setShowShareMenu] = useState(false);
  const isSmallScreen = useMedia({ query: "(max-width: 1024px)" });
  return (
    <>
      <nav className="top-nav">
        <span class="top-logo">MAPLE beta 2.1</span>
        <ul>
          <li>
            <button
              onClick={() => handleClick('profiles')}
            >
              Profiles
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick('contact')}
            >
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
            >
              Share
            </button>
            {showShareMenu ? (
              <div
                style={{
                  // position: 'fixed',
                  // top: isSmallScreen ? '50px' : '80px',
                  // right: '10px',
                  // width: '7.5rem',
                  // fontSize: '14px',
                  // textAlign: 'center'
                }}
                className="post-social"
              >
                <FacebookShareButton url={'https://interculturalskillslab.com'} style={{height: 'inherit'}} >
                  <span className="icon">
                    <FacebookIcon size={isSmallScreen ? 16 : 32} round={true} />
                  </span>
                </FacebookShareButton>
                <TwitterShareButton url={'https://interculturalskillslab.com'} className="is-rounded twitter" title={shareMsg} style={{height: 'inherit'}} >
                  <span className="icon">
                    <TwitterIcon size={isSmallScreen ? 16 : 32} round={true} />
                  </span>
                </TwitterShareButton>
                <LinkedinShareButton url={'https://interculturalskillslab.com'} className="is-rounded linkedin" title={shareMsg} style={{height: 'inherit'}} >
                  <span className="icon">
                    <LinkedinIcon size={isSmallScreen ? 16 : 32} round={true} />
                  </span>
                </LinkedinShareButton>
                <WhatsappShareButton url={'https://interculturalskillslab.com'} className="is-rounded whatsapp" title={shareMsg} style={{height: 'inherit'}} >
                  <span className="icon">
                    <WhatsappIcon size={isSmallScreen ? 16 : 32} round={true} />
                  </span>
                </WhatsappShareButton>
                <EmailShareButton url={'https://interculturalskillslab.com'} className="is-rounded email" title={shareMsg} style={{height: 'inherit'}} >
                  <span className="icon">
                    <EmailIcon size={isSmallScreen ? 16 : 32} round={true} />
                  </span>
                </EmailShareButton>
              </div>
            ) : null}
          </li>
        </ul>
      </nav>
    </>
  );
}

LandingHeader.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  isArticleVisible: PropTypes.bool
}

export default LandingHeader
