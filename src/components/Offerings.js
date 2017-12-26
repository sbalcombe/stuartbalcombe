import React from 'react'
import Link from "gatsby-link"

export default function Offerings (props) {
	return (
		<div>
			<h3>What I offer</h3>
			<p><Link to='/teardowns'><strong>UX Teardowns</strong></Link> – An in-depth report of your site’s onboarding flow and actionable advice to increase conversion.</p>
			<p><Link><strong>Monthly Product Support</strong></Link> – Does your company need ongoing growth strategy, experiment design, and analysis? This monthly service allows you to receive top-notch guidance without hiring a growth lead in-house.</p>
		</div>
	)
}