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
          <h2 className="major">Site</h2>
          <p><a href="https://sagardesai.me">sagardesai.me</a></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Coding History</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <h4>What's your coding history? When did you start, and what have you done between then and now?</h4>
          <p>I'm a software developer, and recent graduate of Lambda School, a 7 month bootcamp that fosuses on project work, specifically team based work, along with computer science fundamentals.</p>
          <p>My skill set is geared towards web development, specifically Javascript and Python, and frameworks like React and Django.</p>
          <p>More recently, I have been taking interest in Flutter, and am currently starting work on a Flutter app. I would love to hear a little about the plans Adroiti has for adopting this framework for the TREO Automotive Trading platform.</p>
          <p>I'm a fast learner, and am conscientious about making the products I'm working on as great as possible. Please find me on <a href="https://github.com/sagardesai90">Github</a> to learn more about my recent work.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          <h4>What do you want to do with the rest of your life, and how is Adroiti a step toward your long-term goals?</h4>
          <p>I seek to continue developing my technical skillsets, and work on engaging projects. Working at the intersection of fields like healthcare, technology, biotech, and in capacities like consulting and with startups has given me the opportunity to explore my interests. I seek opportunities that let me showcase my technical knowhow, but also emphasize the need to think creatively.</p>
          <p>The ability to build solutions at scale with the help of software is what initially fascinated me. As I see it, building great products inside and out involves creating a culture of attention to detail, and for a developer that means your code has to be readable and be thoughtful of constraints.</p>
          <p>At Adroiti, I hope to work on a development team that pushes each other to make the best possible contributions, being mindful of product roadmaps and what good code looks like and reads like.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h4>How did you hear about us? A job posting? Chalk on a sidewalk? From a friend? Let us know where you saw this opening.</h4>
          <p>I heard about Adoiti from <a href="https://flutterjobs.info/jobs/americas">flutterjobs.info</a>, and decided to apply.</p>
          <p>You can find my resume <a href="https://drive.google.com/open?id=1dcxOQg7NabVIEHUqHDB_f-l6oYreEB5s">here</a>.</p>
          <ul className="icons">
            {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
            {/* <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li> */}
            {/* <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li> */}
            <li><a href="http://github.com/sagardesai90" className="icon fa-github"><span className="label">GitHub</span></a></li>
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