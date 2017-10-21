import React from 'react'
import Link from "gatsby-link"

import { rhythm } from '../utils/typography'

class About extends React.Component {
  render() {
    return (
    	<div
        style={{
          marginBottom: rhythm(3.5),
        }}
      >
	        <h1>Stuart Balcombe <br/> <span style={{fontSize:'2rem', fontWeight: 500}}>Product Design</span></h1>
	        <p style={{ textAlign: 'justify' }}>
            Hi I'm Stuart. I've spent the past 2 and half years building products and helping companies grow. I'm currently Director of Product at <a href='https://www.letssail.co' target='_blank'>Sail</a> and previously led growth at <a href='http://www.betaspring.com' target='_blank'>Betaspring</a>
          </p> 
          <p>
            I take an experience-first approach to helping businesses understand customer problems and design solutions to make their users successful.
          </p>
	        <p>Have a project you'd like to work on? <Link to="/work-with-me/">Get in touch</Link></p>
	        
      	</div>
    )
  }
}

export default About