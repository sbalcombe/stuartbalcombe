import React from 'react'
import Link from "gatsby-link"

// Import typefaces
import 'typeface-fjalla-one'
import 'typeface-cantarell'

import { rhythm } from '../utils/typography'

class About extends React.Component {
  render() {
    return (
    	<div
        style={{
          marginBottom: rhythm(3.5),
        }}
      >
	        <h1 style={{ fontFamily: 'Fjalla One, sans-serif', fontSize: '3rem', lineHeight: 1.4 }}>Stuart Balcombe is a product designer based in Philadelphia.</h1>
	        <p style={{ fontFamily: 'Cantarell, sans-serif', textAlign: 'justify' }}>Hi there, I'm Stuart. I've spent the past 2 and half years building products and helping companies grow. I'm currently Director of Product at <a href='https://www.letssail.co' target='_blank'>Sail</a> and previously Growth Lead at <a href='http://www.betaspring.com' target='_blank'>Betaspring</a>, I take an experience-first approach to helping businesses understand customer problems and design solutions to make their users successful.</p>
	        <p style={{ fontFamily: 'Cantarell, sans-serif' }}>I'm currently available for freelance projects and consulting.</p>
	        <Link to="/work-with-me/" style={{ fontFamily: 'Cantarell, sans-serif' }}>Get in touch</Link>
      	</div>
    )
  }
}

export default About