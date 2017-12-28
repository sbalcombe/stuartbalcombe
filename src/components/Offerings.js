import React from 'react'
import Link from "gatsby-link"

export default function Offerings (props) {
	return (
		<div>
			<p><strong>Here are 3 ways I can help you...</strong></p>
			<p><Link to='/user-experience-review'><strong>Custom UX Review ($995)</strong></Link> – An actionable audit of your product’s user experience. You’ll get a complete PDF report with a detailed screen-by-screen teardown.</p>
			<p><Link to='/custom-product-design'><strong>Custom Product Design (Starting at $3000 / month)</strong></Link> – Redesign an existing feature or a create a new product. We'll quickly validate your ideas with rapid prototyping and user testing.</p>
			<hr />
			<p><Link to='/freelance-growth-plan'><strong>Freelance Growth Plan ($495)</strong></Link> – Take a fresh look at your business and put together an actionable plan to increase your income.</p>
		</div>
	)
}