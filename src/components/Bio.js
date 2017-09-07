import React from 'react'

// Import typefaces
import 'typeface-fjalla-one'
import 'typeface-cantarell'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
          fontFamily: 'Cantarell, sans-serif'
        }}
      >
        <img
          src={profilePic}
          alt={`Stuart Balcombe`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '2px'
          }}
        />
        Written by <strong>Stuart Balcombe</strong> who lives and works in Philadelphia building useful things.{' '}
        <a href="https://twitter.com/stubalcombe">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
