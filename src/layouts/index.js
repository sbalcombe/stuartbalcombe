import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Footer from "../components/Footer"

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <Container
        style={{
          maxWidth: rhythm(20),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children()}
        <Footer />
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
