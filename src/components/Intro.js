import React from 'react'
import Link from "gatsby-link"

import { rhythm } from '../utils/typography'

class Intro extends React.Component {
  render() {
    return (
    	  <div>
	        <h1>I’m Stuart Balcombe. I help people build better products.</h1>
	        <p style={{ textAlign: 'justify' }}>
            Want to better understand your customers and create a product they love? For the past 3 years I’ve been building customer-focused products at companies like <Link to='/a/designing-one-to-one-payment-experiences'>Sail</Link>, Compass and Betaspring.
          </p>
          <p>
            I help people with Product Strategy, UX Design and Customer Research while <Link to='/a'>writing</Link> about everything I learn.
          </p>
      	</div>
    )
  }
}

export default Intro;