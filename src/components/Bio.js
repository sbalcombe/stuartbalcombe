import React from 'react'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: 0,//rhythm(2.5),
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
        I'm currently based in Philadelphia, building products to solve customers problems.{' '}
        <a target='_blank' href="mailto:stuartbalcombe@gmail.com">
          Get in touch
        </a>
      </p>
    )
  }
}

export default Bio
