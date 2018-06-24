import React from 'react'
import Link from "gatsby-link"

import { rhythm } from '../utils/typography'

class Intro extends React.Component {
  render() {
    return (
    	  <div>
	        <h1>Hi, I'm Stuart Balcombe.</h1>
          <p>I help early-stage SaaS founders validate their product ideas through <strong>user research</strong>, <strong>UX design</strong> and <strong>rapid prototyping</strong> BEFORE spending thousands of dollars building a product no one will buy.</p>
      	  <p>I’m passionate about building successful products by focusing on two things:</p>
          <ol>
            <li><strong>Getting closer to your customers.</strong></li>
            <li><strong>Starting small and iterating quickly.</strong></li>
          </ol>
          {/*<Link to='/work-with-me'>Learn more -></Link>*/}

          <h3>What I offer</h3>
          <ul>
            <li><Link to="/custom-product-design">UX / UI Design</Link>, a customer focused design and testing service for your new SaaS product.</li>
            <li><Link to="/user-experience-review">User Experience Teardowns</Link>, a comprehensive report of your product experience.</li>
            <li><Link to='/product-leadership-for-teams'>Product Leadership for Teams</Link>, a monthly service to provide you with top-notch product leadership without hiring a product owner in-house.</li>
            <li><Link to="/a">Articles</Link> with my latest thinking on building customer-focused products.</li>
          </ul>
        </div>
    )
  }
}

export default Intro;