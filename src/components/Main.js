import PropTypes from 'prop-types'
import React from 'react'
import AboutArticle from '../pages/articles/about'
import WorkArticle from '../pages/articles/work'
import IntroArticle from '../pages/articles/intro'
import ContactArticle from '../pages/articles/contact'

const Main = ({article, onCloseArticle, setWrapperRef, timeout, route, articleTimeout}) => {
  let close = (
    <div
      className="close"
      onClick={() => {
        onCloseArticle()
      }}
    ></div>
  )

  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <IntroArticle close={close} article={article} articleTimeout={articleTimeout} />
      <WorkArticle close={close} article={article} articleTimeout={articleTimeout} />
      <AboutArticle close={close} article={article} articleTimeout={articleTimeout} />
      <ContactArticle close={close} article={article} articleTimeout={articleTimeout} />
    </div>
  )
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
