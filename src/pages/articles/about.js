import React from 'react'
import pic03 from '../../images/pic03.jpg'
import { ABOUT_PAGE } from '../../components/Constants'

const AboutArticle = ({ close, article, articleTimeout }) => {
  return (<article
    id="about"
    className={`${article === ABOUT_PAGE ? 'active' : ''} ${articleTimeout ? 'timeout' : ''
      }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">Another About</h2>
    <span className="image main">
      <img src={pic03} alt="" />
    </span>
    <p>
      New Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
      eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
      erat volutpat. Praesent urna nisi, fringila lorem et vehicula
      lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
      Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
      Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
      amet.
    </p>
    {close}
  </article>)
}

export default AboutArticle