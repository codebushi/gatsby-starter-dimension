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
          {/* <span className="image main"><img src={pic01} alt="" /></span> */}
          {/* <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p> */}
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Coding History</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <h4>What's your coding history? When did you start, and what have you done between then and now?</h4>
          <p>I'm a software developer, and recent graduate of Lambda School, a 7 month bootcamp that fosuses on project work, specifically team based work, along with computer science fundamentals.</p>
          <p>My skill set is geared towards web development, specifically Javascript and Python, and frameworks like React and Django.</p>
          <p>I'm a fast learner, and am conscientious about making the products I'm working on as great as possible. Please find me on <a href="https://github.com/sagardesai90">Github</a> to learn more about my recent work.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          <h4>What do you want to do with the rest of your life, and how is Expensify a step toward your long-term goals?</h4>
          <p>I seek to continue developing my technical skillsets, and work on engaging projects. Working at the intersection of fields like healthcare, technology, biotech, and in capacities like consulting and with startups has given me the opportunity to explore my interests. I seek opportunities that let me showcase my technical knowhow, but also emphasize the need to think creatively.</p>
          <p>The ability to build solutions at scale with the help of software is what initially fascinated me. As I see it, building great products inside and out involves creating a culture of attention to detail, and for a developer that means your code has to be readable and be thoughtful of constraits.</p>
          <p>At Expensify, I hope to work on a development team that pushes each other to make the best possible contributions, being mindful of product roadmaps and what good code looks like and reads like.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h4>How did you hear about us? A job posting? Chalk on a sidewalk? From a friend? Let us know where you saw this opening.</h4>
          <p>I heard about Expensify from one of Lambda School's career coaches, and after reading about it on <a href="https://medium.com/@boliver/expensify-is-the-slack-of-accounting-40e4b6b1ef31">Medium</a>, decided to apply.</p>
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