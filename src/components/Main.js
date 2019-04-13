import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>

        <div className="listofthings">
        <ul><li>I don’t make up user’s needs - <b>I obtain them from surveys and interviews</b> </li>
            <li>I don’t design for the sake of designing -<b> I design to solve a real problem</b> </li>
            <li>I don’t design according to how I think it should be -<b> I design according to data</b> </li>
            <li>I don’t argue with teammates - <b> We build prototypes and watch how users behave</b> </li>
          </ul>

          <hr>
          </hr>
        </div>

<h1>GENERAL BENCHMARK</h1>

<img className='articleimg' src="https://i.imgur.com/8lMC1Zl.png"/>

<p>We start by defining what the client wants to achieve by having us design his app. We do this by conducting an interview with him. We are done with this phase once we can define exactly a real problem we can have a solution to.
<p></p>
<blockquote>In this case study our client is a national gym chain that needs an android app which will help the trainers follow their clients. This app will also help the clients remind them of their trainings and workouts routines.</blockquote></p>

<h2>Competitive Benchmark</h2>

<p>Our first job should be check what is doing the competition in the situation the client’s idea isn’t really innovative and has been already done  - or if there similar enough ideas from which we can draw some inspiration. Big companies such as Google, Amazon or Facebook will be always the first thing everyone will compare our project to - so it’s an important concept to keep in mind during the whole process. 
<p></p>
<blockquote>We google ‘apps for personal trainers and clients’. There are several results, most of which are iOS apps. A software called Vagaro has some integrations with Facebook/Instagram, but it looks its purpose is bookings for salons rather than a client’s management. We also take note of their pricing methods and which type of premium model they offer. After that we check the Play Store and we can found an app called FitSW. It looks like an app aimed to personal trainers and the UI seems confusing - maybe we can improve it? What if we integrate a way for the clients to speak to their trainers through the app?  </blockquote> </p>


<h1>USER RESEARCH</h1>

<img className='articleimg' src="https://i.imgur.com/8lMC1Zl.png"/>

<p>In this phase we need to do surveys and interviews with our users. We also have additional tools which we can use - such as creating one or multiple User Personas, which help everyone involved in this project keep them focused on the user needs, as it should be.  </p>

<h1>WIREFRAMING</h1>

<img className='articleimg' src="https://i.imgur.com/8lMC1Zl.png"/>

<p>We start by defining what the client wants to achieve by having us design his app. We do this by conducting an interview with him. We are done with this phase once we can define exactly a real problem we can have a solution to.
<p></p>
<blockquote>In this case study our client is a national gym chain that needs an android app which will help the trainers follow their clients. This app will also help the clients remind them of their trainings and workouts routines.</blockquote></p>


<h1>PROTOTYPING</h1>


<img className='articleimg' src="https://i.imgur.com/8lMC1Zl.png"/>

<p>We start by defining what the client wants to achieve by having us design his app. We do this by conducting an interview with him. We are done with this phase once we can define exactly a real problem we can have a solution to.
<p></p>
<blockquote>In this case study our client is a national gym chain that needs an android app which will help the trainers follow their clients. This app will also help the clients remind them of their trainings and workouts routines.</blockquote></p>

<h1>PRESENTATION</h1>


<img className='articleimg' src="https://i.imgur.com/8lMC1Zl.png"/>

<p>We start by defining what the client wants to achieve by having us design his app. We do this by conducting an interview with him. We are done with this phase once we can define exactly a real problem we can have a solution to.
<p></p>
<blockquote>In this case study our client is a national gym chain that needs an android app which will help the trainers follow their clients. This app will also help the clients remind them of their trainings and workouts routines.</blockquote></p>


          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>

          <h2 className="major">About me</h2>
  
            <p><h2>My photo, I can code, I make music yaddayadda my story</h2></p>
            {close}
        </article>







          <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
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