import React from 'react'
import Link from 'gatsby-link'
import '../scss/main.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={'/'}>
            Gatsby Starter Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>
            Gatsby Starter Blog
          </Link>
        </h3>
      )
    }
    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
