import React from 'react'
import Link from "gatsby-link"

import { rhythm } from '../utils/typography'

class Intro extends React.Component {
  render() {
    return (
    	  <div>
	        <h1>Grow your business with customer-focused design</h1>
	        <p style={{ textAlign: 'justify' }}>
            Stuart Balcombe is a designer who uses customer-driven tests to increase successful adoption for online products. Unlike other growth marketers, I take a customer centered approach to business problems and design end-to-end experiences to drive sustainable growth.
          </p> 
          <p>
            I’m Stuart Balcombe, a designer and user experience specialist with more than 3 years of experience working with companies like <a>Sail</a> and <a>Betaspring</a>.
          </p>
      	</div>
    )
  }
}

export default Intro;