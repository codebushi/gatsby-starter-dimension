import React from 'react'
import Link from 'gatsby-link'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeoutTrigger: false,
      article: ''
    }
    this.handleToggleArticle = this.handleToggleArticle.bind(this)
  }

  handleToggleArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeoutTrigger: !this.state.timeoutTrigger,
      })
    }, 325)

  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.siteDescription

    return (
      <div className={`body ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="wrapper">

          <Header onToggleArticle={this.handleToggleArticle} timeoutTrigger={this.state.timeoutTrigger} />
          <Main isArticleVisible={this.state.isArticleVisible} timeoutTrigger={this.state.timeoutTrigger} article={this.state.article} onToggleArticle={this.handleToggleArticle} />
          <Footer />

        </div>
        <div id="bg"></div>
      </div>
    )
  }
}

Template.propTypes = {
  route: React.PropTypes.object,
}

export default Template

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`