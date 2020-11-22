import PropTypes from 'prop-types'
import React from 'react'
import icon_clock from '../images/icon_clock.png'
import icon_computer from '../images/icon_computer.png'
import icon_share from '../images/icon_share.png'
import banner_isl from '../images/banner_isl.png'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="instructions"
          className={`${this.props.article === 'instructions' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Instructions</h2>
          <div className="image-with-span">
            <img src={icon_computer} alt="" />
            <span>
              This web-based assessment works best on <b>Chrome, Edge or Firefox</b> (if they are not
              your default browser, copy and paste the link to one of those browsers). Meerus the
              chatbot will guide you through the various sections. The questions are accompanied by
              images, so pick on the images that reflect the way you naturally behave or interact rather
              than how you think you should behave. There are no right or wrong answers. We
              recognize that your responses to some of the questions could be a “maybe” or “it
              depends”. Go with your instinctive response and what you are likely to do most often.
            </span>
          </div>
          <div className="image-with-span">
            <img src={icon_clock} alt="" />
            <span>
              The test will take approximately 25-30 minutes to complete. For a good user experience,
              we request that you complete the assessment in one sitting. The time you take to
              complete will depend on whether you respond instinctively or give a lot of care and
              thought to your responses. There are open-ended questions that require a written
              response. Please try and respond to the questions as you would in a work setting. Our
              advice is to relax, reflect and have fun!
            </span>
          </div>
          <div className="image-with-span">
            <img src={icon_share} alt="" />
            <span>
              The current beta version is limited to four profiles. More profiles and strategies to
              develop your intercultural competence will be available in the final release version.
              Thank-you for contributing to our research. It would be very helpful <b>if you could share
              this beta test across your networks</b> and to whomever you feel would benefit or be
              interested in such an assessment.
            </span>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main no-overlay">
            <img src={banner_isl} alt="Intercultural Skills Lab - Banner" />
          </span>
          <p>
            Culture is diverse, vibrant, complex and intricate and the MAPLE (Mutual Acculturation Profile
            and Learning Engine) cultural assessment tool captures this richness and energy in its design
            and structure. Using a gamified and visual approach the tool offers insights into how cultural
            values influence our behaviour and communication styles in the workplace. Led by our friendly
            chat-bot Meerus the user experience is engaging, interactive and self-reflective.
          </p>
          <p>
            Traditionally culture has been associated with the countries it resides in. Current cultural
            assessment tools often use national boundaries as a proxy for culture and provide profiles in
            relation to a nationality. What makes MAPLE unique, is that, it captures both cultural values and
            communicating styles to create profiles that are not localized and set in nationality. The MAPLE
            reports use profile names that are synthetic and imaginary but the cultures they represent are
            real and are reflective of the cultural identities that globalization influences and enhances.
          </p>
          <p>
            The Intercultural Skills Lab at Rotman promotes a deeper understanding of intercultural
            competencies to support individuals and organizations to function effectively across cultures.
            When a person learns about the cultural values that drive them, they gain a real understanding
            of why they behave, interact and communicate the way they do and how others perceive and
            relate to them. This understanding can be used to improve their daily interactions in any cross-
            cultural situation, adapt to different work environments and create inclusive teams and
            workplaces.
          </p>
          {close}
        </article>

        <article
          id="share"
          className={`${this.props.article === 'share' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Share</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form action="https://getform.io/f/c1bcca87-de02-4091-a305-8522e03cc995" method="POST">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
