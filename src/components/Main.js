import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">My design process</h2>
        
         <p>The best way to present myself to the world its to show how actually I like to organize and manage my work - rather than showing off some fancy UI which the web it’s already full of. Here’s a little summary of what I’m going to explain. There are the key points of my designing process:

<ul><li>I don’t make up user’s needs - I obtain them from surveys and interviews </li>
<li>I don’t design for the sake of designing - I design to solve a real problem </li>
<li>I don’t design according to how I think it should be - I design according to data </li>
<li>I don’t argue with teamates - We build prototypes and watch how users behave </li>

</ul>
</p>
         



                    
                    
          <p><h2>Section in Progress</h2></p>



















          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About me</h2>





                        <p><h2>Section in Progress</h2></p>








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
      
          <ul className="icons">
            <li><a href="https://twitter.com/aledarpetr" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.instagram.com/ramingau/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
             <li><a href="https://www.linkedin.com/in/a-petrovic/" className="icon fa-linkedin"><span className="label">GitHub</span></a></li>
            <li><a href="https://github.com/adunis" className="icon fa-github"><span className="label">GitHub</span></a></li>

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