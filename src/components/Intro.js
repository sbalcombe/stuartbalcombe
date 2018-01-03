import React from 'react'
import Link from "gatsby-link"

import { rhythm } from '../utils/typography'

class Intro extends React.Component {
  render() {
    return (
    	  <div>
	        <h1>I’m Stuart Balcombe. I help people build customer-focused products.</h1>
	        <p style={{ textAlign: 'justify' }}>
            For the past 3 years I’ve been crafting user experiences that drive sustainable growth. Most recently I've been solving customer problems at <Link to='/a/designing-one-to-one-payment-experiences'>Sail</Link>, <a href='https://www.hellocompass.com' rel="nofollow" target="_blank">Compass</a> and <a href='https://www.revupfund.com/' rel="nofollow">RevUp by Betaspring</a>.
          </p>
      	</div>
    )
  }
}

export default Intro;