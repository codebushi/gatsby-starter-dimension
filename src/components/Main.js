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
        <h4><ul className="Intro"><li>I don’t make up user’s needs - <b>I obtain them from surveys and interviews</b> </li>
            <li>I don’t design for the sake of designing -<b> I design to solve a real problem</b> </li>
            <li>I don’t design according to how I think -<b> I design according to data</b> </li>
            <li>I don’t argue with my teammates - <b> We build prototypes and watch how users behave</b> </li>
          </ul> </h4>

          <hr>
          </hr>
        </div>

<h2>Portfolio, Case Studies and Miscellanous</h2>


<div>
<a target="_blank" href="https://mytrainerapp.studio.design/"><h3>MyTrainer App</h3></a>
<a target="_blank" href="https://mytrainerapp.studio.design/"><img className='articleimg' style={{width:300}}   src="https://i.imgur.com/6VI84yh.png"/></a>
<p>
<a target="_blank" href="https://mytrainerapp.studio.design/">This</a> is a mockup of a case study. Here you can see what is my design process and my principles regarding UX design.
<p></p>
<h3>This Website </h3>
This web-site is run using Gatsby.js and versioned through  <a href="https://github.com/adunis/adunis-portfolio" className="icon fa-github"><span className="label">Github</span> Github</a>, showcases that I have basic understanding of Front-end developing.
<p></p>
</p></div>


          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>



          <h2 className="major">About me</h2>
    <p></p>

      <img className="avatar" src="https://i.imgur.com/eTGEgCn.png"/>
      <p></p> 
       <p></p>


     <p>My name is Aleksandar and I'm an UX Designer in learning. I have some bits of programming knowledge as I tackled a little with React and various libraries. I also studied for some years Computer Science.  My passion is making <a href="https://baldrsglade.bandcamp.com/"> music </a> and playing D&D. Currently I'm living in Northern Italy, but I have no issues with moving around the globe.</p>
            {close}
        </article>


          <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none'}}>
            <h2 className="major">Contacts</h2>

            <div style={{float:'middle'}}>
           <a href="mailto:aleksandarpetrovic101@gmail.com">aleksandarpetrovic101@gmail.com</a>

              <ul className="icons">
                <li><a href="https://twitter.com/aledarpetr" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/ramingau/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/a-petrovic/" className="icon fa-linkedin"><span className="label">GitHub</span></a></li>
                <li><a href="https://github.com/adunis" className="icon fa-github"><span className="label">GitHub</span></a></li>

              </ul>
</div>
     
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