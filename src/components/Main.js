import PropTypes from 'prop-types'
import React from 'react'
import AboutArticle from '../pages/articles/about'
import WorkArticle from '../pages/articles/work'
import IntroArticle from '../pages/articles/intro'
import ContactArticle from '../pages/articles/contact'

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
        <IntroArticle close={this.props.close} article={this.props.article} articleTimeout={this.props.articleTimeout} />
        <WorkArticle close={this.props.close} article={this.props.article} articleTimeout={this.props.articleTimeout} />
        <AboutArticle close={this.props.close} article={this.props.article} articleTimeout={this.props.articleTimeout} />
        <ContactArticle close={this.props.close} article={this.props.article} articleTimeout={this.props.articleTimeout} />
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
