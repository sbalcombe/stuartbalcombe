import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

class WorkWithMe extends React.Component {
  render() {
  	return (
  		<div>
  			<Helmet title={get(this, "props.data.site.siteMetadata.title")} />
  			<div style={{ paddingTop: '2rem' }}>
  				<h2 >Let's work together!</h2>
  				
				<p>I’m a systems thinker - I love taking a complex problem and identifying a clear path to building a functional product that improves your users lives. I've spent the past 3 years working with early-stage startups to help them build their products to achieve product-market fit and unlock their next level of growth.</p>

				<p>Here are some project ideas we could work on together</p>
				<ul>
					<li><p style={{ fontFamily: 'Cantarell, sans-serif', lineHeight: 1.4 }}><strong>Building a lightweight prototype to test your latest startup idea</strong></p></li>
					<li><p style={{ fontFamily: 'Cantarell, sans-serif', lineHeight: 1.4 }}><strong>Designing a new onboarding experience to improve user retention</strong></p></li>
					<li><p style={{ fontFamily: 'Cantarell, sans-serif', lineHeight: 1.4 }}><strong>Creating a conversion optimized landing page for your new product</strong></p></li>
				</ul>

				<p>I can add the most value in the earliest stages of product development, when the name of the game is rapid testing of your riskiest assumptions that put lightweight prototypes in the hands of real users in days rather than months.</p>
				<p>I combine experience designing, building and testing lightwight products with <a href='http://www.hellocompass.com/'>Compass</a> and <a href='https://www.letssail.co/'>Sail</a> with experience documenting growth hypothesis with e-commerce brands like <a href='https://www.pijonbox.com/'>PijonBox</a> and <a href='https://www.pijonbox.com/'>PostFly</a> to build solutions that are not only functional but delightful for users. </p>

				<h3>Contact me</h3>
				<p>If you have a project in mind that you think I may be a good fit for, I’d love to hear from you. The best ways to get in touch are to send me a direct message on Twitter <a href='https://twitter.com/stubalcombe'>@stubalcombe</a> or to email <a href='mailto:stuart@stuartbalcombe.com'>stuart[at]stuartbalcombe.com</a> with some details.</p>
				<p><strong>Please include information about:</strong></p>
				<ul>
					<li><p>The problem you'd like to solve by working together</p></li>
					<li><p>What goals you'd like to meet by successfully executing this project</p></li>
					<li><p>The budget you've set aside for your project</p></li>
					<li><p>When you are looking to get started</p></li>
				</ul>
			</div>
  		</div>
  	)
  }
}

export default WorkWithMe;