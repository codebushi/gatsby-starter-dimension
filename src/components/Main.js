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
          
          <p> 
          	<h3>Overview and Problem Statement </h3>

        The perfectly concise, beautifully worded snippet that explains months (or even years) of intense work that helped grasp the problem you were solving. Sounds easy, ya? (Nope, super tough.).</p>

        <span className="image main"><img src={pic01} alt="" /></span>
         
   <p> 
          	<h3>Users and audience</h3>

        Dispel all doubts by clearly stating who you were designing for. Put a face on the project: single mothers that don’t have time to shop for food, recent graduates who don’t understand their student loans, or tourists that have trouble finding a good cup of coffee. Develop personas. 

       <span className="image main"><img src={pic01} alt="" /></span>

        </p>

  <p> 
          	<h3>Design Process</h3>


<span className="image main"><img src={pic01} alt="" /></span>


</p> 

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">My philosophy</h2>

    <p><h3>An User shouldn't have questions</h3>
       </p>

       <p><h3>Design is a set of tools, not a standardized process </h3>
Every problem presents its own unique set of characteristics, as such there is no one-size-fits-all process for coming to the best solution. The art of design is about having a diverse set of tools and approaches, and determining when to apply each. To quote Maslow, “…it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail” — so always carry a hammer, a screw driver, a pair of pliers and a hex wrench.
		</p>

       <p><h3>But he should be free toe explore (Gamification / Users fidelity / good design is in the details / microinteractions) </h3>
       Micro-interactions are events which have one main task — a single purpose — and they’re found all over your device and within apps. Their purpose is to delight the user; to create a moment that is engaging, welcoming and, dare we say it — human.

       . Attention to details is what basically differs an an exceptional website from ordinary one. 

       Swipe, Loading bars, animations, focusing on an action (blur outside for example, zoom on the buttons, aiming down a rifle in CoD)
       </p>

        <p><h3>Illusory minimalism - a lot of options withou enough sub-menus </h3>
       Micro-interactions are events which have one main task — a single purpose — and they’re found all over your device and within apps. Their purpose is to delight the user; to create a moment that is engaging, welcoming and, dare we say it — human.

       . Attention to details is what basically differs an an exceptional website from ordinary one. 

       Swipe, Loading bars, animations, focusing on an action (blur outside for example, zoom on the buttons, aiming down a rifle in CoD)
       </p>

       <p><h3>User should feel good</h3>
       </p>

       <p><h3>Design is a set of tools, not a standardized process </h3>
Every problem presents its own unique set of characteristics, as such there is no one-size-fits-all process for coming to the best solution. The art of design is about having a diverse set of tools and approaches, and determining when to apply each. To quote Maslow, “…it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail” — so always carry a hammer, a screw driver, a pair of pliers and a hex wrench.


		</p>


  <p><h3>Design as if it was a river, not a rock</h3>
    Design changes with time and with trends. One of the most important elements of a good design it's using pattern that the user is accostumed to. If all of a sudden a big player like Facebook, Google or Amazon changes how his services are accessed, all the their users will except to find similiar patterns in all the rest of the ecosystem.
  </p>




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