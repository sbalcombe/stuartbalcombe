import React from 'react'
import Link from "gatsby-link"

import { rhythm } from '../utils/typography'

class Intro extends React.Component {
  render() {
    return (
    	  <div>
	        <h1>Helping online businesses grow with human-centered design.</h1>
	        <p style={{ textAlign: 'justify' }}>
            Hi, I’m Stuart Balcombe. I'm a product designer with more than 3 years experience using customer-driven design to increase adoption and user retention for online products. I use a problem first approach to craft simple experiences that drive sustainable growth.
          </p> 
          <p>
            Most recently I've been solving customer problems at <Link to='/a/designing-one-to-one-payment-experiences'>Sail</Link>, <a href='https://www.hellocompass.com' rel="nofollow" target="_blank">Compass</a> and <a href='https://www.revupfund.com/' rel="nofollow">RevUp by Betaspring</a>.
          </p>
      	</div>
    )
  }
}

export default Intro;