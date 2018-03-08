import React from 'react'
import Link from "gatsby-link"

import { rhythm } from '../utils/typography'

class Intro extends React.Component {
  render() {
    return (
    	  <div>
	        <h1>I’m Stuart Balcombe. I help people build better products.</h1>
	        <p style={{ textAlign: 'justify' }}>
            Want to better understand your customers and create a product they love? For the past 3 years, I’ve been helping companies like <Link to='/a/designing-one-to-one-payment-experiences'>Sail</Link>, Compass, and <a href="https://www.revupfund.com/" target="_blank" rel="nofollow">Betaspring</a> build customer-focused products.
          </p>
          <p>
            Get access to my occasional newsletter where I share everything I know about product strategy, UX design and customer research.
          </p>
      	</div>
    )
  }
}

export default Intro;