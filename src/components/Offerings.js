import React from 'react'
import Link from "gatsby-link"

export default function Offerings (props) {
	return (
		<div>
			<p><strong>Here are 3 ways I can help you...</strong></p>
			<p><Link to='/user-experience-review'><strong>Custom UX Review ($995)</strong></Link> – An actionable audit of your product’s user experience. You’ll get a complete PDF report with a detailed screen-by-screen teardown.</p>
			<p><Link to='/custom-product-design'><strong>Custom UX/UI Design (Starting at $1500 a week)</strong></Link> – Redesign an existing feature or a create a new product. We'll quickly validate your ideas with rapid prototyping and user testing.</p>
			<p><Link to='/product-leadership-for-teams'>Product Leadership for Teams</Link>, a monthly service to provide you with top-notch product leadership without hiring a product owner in-house.</p>
		</div>
	)
}