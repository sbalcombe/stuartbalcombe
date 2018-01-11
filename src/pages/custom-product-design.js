import React from "react"
import Link from "gatsby-link"

import SEO from '../components/SEO'
import QuoteBlock from '../components/QuoteBlock.js'
import Button from '../components/Button'
import Bio from '../components/Bio'

export default function CustomProductDesign (props) {
	return (
		<span>
			<SEO />
			<h1 style={{ marginBottom: '0.25rem' }}>Custom product design:</h1>
			<h3 style={{ marginTop: 0, fontWeight: 500 }}>Get dedicated user-experience support to launch your new product or redesign an existing feature.</h3>
			<p>User experience design can make or break your product and will help drive your key business metrics. I'm most valuable during the early stages of product development where I can transform user research into functional prototypes.</p>
			<h3>Are you struggling with have any of these product related questions?</h3>
			<ul>
				<li>Which feature should I build next?</li>
				<li>How can I increase user value?</li>
				<li>Why aren't my website visitors converting?</li>
				<li>How can I test my idea without writing any code?</li>
				<li>Why are trial users not paying for my product?</li>
			</ul>
			<QuoteBlock quoteText="Working with Stuart is a pleasure — he is a thoughtful, proactive product leader with a breadth of skills positioning him to get his hands dirty. On the hands-dirty side, Stuart took charge of customer research, design, UX, and prototyping to great effect. As a leader, Stuart collaborated with engineering management to get buy-in and set scope, worked directly with individual engineers on implementation issues, and deftly coordinated across product and and non-product stakeholders." quoteAuthor='– Matt Fulton, CTO, Sail & Compass'/>
			<h3>I can help...</h3>
			<p>We'll start by creating a roadmap for success. If you have an existing  product that usually means a <Link to='/user-experience-review'>UX Review</Link>. For new products or features we'll define how we'll measure success and create a plan to get there. Here's a <Link to='/a/designing-one-to-one-payment-experiences'>look at the process</Link> I used to develop a payment product that processed more than <strong>$125k in 6 months</strong> at Sail.</p>
			<p>To give you a rough idea, creating a ready-to-test Invision prototype for a web app concept might cost $2000 and take 5 days. Tell me about your project by completing the application below. I'll review your answers and respond with a scheduling link to chat on the phone within 48-hours.</p>
			<Button buttonText='Apply now for free' buttonLink='https://stuartbalcombe.typeform.com/to/xM3KCk' />
			<p style={{ marginTop: '0.75rem'}}>All your information will be kept strictly confidential.</p>
			<hr style={{ marginBottom: '1rem' }} />
			<Bio />
		</span>
	)
}