import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="bio" className={`${this.props.article === 'bio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Bio</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Tawny Sorensen is a NYC based Actress, Writer, Filmmaker, and Producer. Her love for performance developed by the age of two when she began her dance training, and her passion for being on stage continued through her middle school drama club, local community theatre, high school dance theatre and high school musicals. She graduated Magna Cum Laude with her BA in Theatre/Performance from Fordham University at Lincoln Centre and received her MFA in Acting from the Actors Studio Drama School/ New School for Drama. Her studies at Fordham were based primarily on the techniques of Konstantin Stanislavski and Jerzy Grotowski, while her graduate studies focused on the Method and the techniques of Lee Strasberg. She also received additional training in Shakespeare and Acting for Film at the Stella Adler Conservatory in New York. She is a proud member of SAG-AFTRA and Actor's Equity.</p>
          <p>As a writer, her plays have been produced by Manhattan Repertory Theatre, Short Play Lab, and Spare Change Theatre Company in New York City. She has produced three of her original short films with her production company Over the High Moon Productions in association with Nobbs Ink. Her first original short film "The Cat's Cradle" premiered at the Twin Cities Film Festival in Minnesota on October 24, 2014 and went on to screen at 30 festivals in 21 states and 3 countries. The film won six awards and garnered five other nominations along the way. Her second short, a short satire "Covered" screened in over a dozen festivals across the US. Her first feature length screenplay "Anamnesia" was an Official Selection at several festivals and was nominated for Best Screenplay (unproduced) at the 2016 Northeast Film Festival Horror Fest.</p>
          <p>Outside of her time on-stage, on-screen, and behind the camera, she enjoys giving love and hugs to puppies, entertaining her nephews and nieces, snuggling up with a good book, creating exciting meals with random ingredients in her fridge, sketching, training for half-marathons and triathlons, raising funds for the Leukemia & Lymphoma Society, and screening films as a judge for several film festivals.</p>
          {close}
        </article>

        <article id="reels" className={`${this.props.article === 'reels' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Reels</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h4 className="major">Dramatic</h4>
          <ReactPlayer url='https://vimeo.com/217247146' width='35rem' /><br></br>
          <h4 className="major">Comedic</h4>
          <ReactPlayer url='https://vimeo.com/217246477' width='35rem'/>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
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
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
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