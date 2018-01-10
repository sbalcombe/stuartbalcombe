import React from 'react'
import Link from "gatsby-link"

import { rhythm } from '../utils/typography'

class Intro extends React.Component {
  render() {
    return (
    	  <div>
	        <h1>I’m Stuart Balcombe. I help people build customer-focused products.</h1>
	        <p style={{ textAlign: 'justify' }}>
            For the past 3 years I’ve been crafting user experiences that drive sustainable growth. I'm currently bootstrapping a <a href='https://www.paymentlink.me' target='_blank' rel='nofollow'>SaaS product</a> and <Link to='a'>writing</Link> about my experiences building products. Previously, I solved customer problems at <Link to='/a/designing-one-to-one-payment-experiences'>Sail</Link>, Compass and Betaspring.
          </p>
      	</div>
    )
  }
}

export default Intro;