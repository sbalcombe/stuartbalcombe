import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import NavBar from "../components/NavBar"

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <span>
      <NavBar />
      <Container
        style={{
          maxWidth: rhythm(20),
          padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
        }}
      > 
        
        {children()}
      </Container>
      </span>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
