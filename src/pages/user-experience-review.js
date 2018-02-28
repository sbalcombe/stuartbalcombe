import React from "react"
import Link from "gatsby-link"

import SEO from '../components/SEO'
import Button from '../components/Button'
import Bio from '../components/Bio'

export default function UserExperienceReview (props) {
  	return (
  		<div>
  			<SEO description='Do your free accounts not convert to paying users as often as you’d like? Do you get repetitive support requests from users trying to complete the same task? Are you experiencing problems with churn? Get an actionable plan to improve your products user experience and grow your online business.'/>
  			<h1 style={{ marginBottom: '0.25rem' }}>Custom UX Review:</h1>
			<h3 style={{ marginTop: 0, fontWeight: 500 }}>An actionable plan to improve your products user experience and grow your online business.</h3>
			<p>Do your free accounts not convert to paying users as often as you’d like? Do you get repetitive support requests from users trying to complete the same task? Are you experiencing problems with churn?</p>
  			<p>The chances are these problems are user-experience related.</p>
			<p>If you’re like many online businesses, you’re doing your best to build a product that makes your users life easier. You spend time and money building new features and growing your audience but you probably have some blindspots when it comes to your overall product experience.</p>
  			<h3>The benefits of a fresh perspective on your user experience…</h3>
  			<p>A great user experience is a competitive advantage. Identifying experience problems can <strong>prevent conversion bottlenecks, increase customer LTV and reduce the time you spend tackling support questions</strong>. I’ve been helping online companies like Sail and Compass create exceptional user experiences for the past few years and now I want to help you personally. Here’s what I’ll do:</p>
			<ul>
				<li>Help ensure your user experience aligns with your product goals.</li>
				<li>Map the complete customer journey for the core tasks completed in your product.</li>
				<li>Identify critical flaws in your product experience.</li>
				<li>Outline small changes that can have an outside impact on your user experience.</li>
			</ul>
			<h3>Here's how it works:</h3>
			<ol>
				<li>You complete a short application to tell me about your business and your goals.</li>
				<li>We complete an initial consultation (90-120 minutes) where we'll walk through your product. Come prepared to share your screen and "pitch" your product.</li>
				<li>I provide your Custom UX Report within 1 week of our initial consultation. You'll get answers to any clarifying questions you have.</li>
			</ol>
			<p>The primary deliverable is an actionable teardown of your products core user experience. You'll receive a 10-15 page report with a screen-by-screen run through of your product. I'll provide recommendations based on my experience and your current product goals. For example:</p>
			<ul>
				<li>Optimization ideas to improve task completion.</li>
				<li>Suggestion to improve onboarding communication.</li>
				<li>Notes on how to use messaging to increase conversion.</li>
				<li>General thoughts on improving usability on different devices.</li>
				<li>Recommendations for keeping your product simple to use as you add new features.</li>
			</ul>
  			<p>The <strong>Custom UX Review</strong> currently costs $495. You’ll receive your actionable teardown report as described above (10-15 pages) within 1 week of our initial consultation.</p>
  			<p>To get started complete the application by clicking the button below. If you're a good fit for the review I'll respond with a scheduling link for our initial consultation within 48-hours.</p>
  			<Button buttonText='Get your Custom UX Review' buttonLink='https://stuartbalcombe.typeform.com/to/hENgsy' />
			<p style={{ marginTop: '0.75rem'}}>All your information will be kept strictly confidential.</p>
			<hr style={{ marginBottom: '1rem' }} />
			<Bio />
  		</div>
  	)
}