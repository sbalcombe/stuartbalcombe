import React from 'react'
import Link from "gatsby-link"

export default function Offerings (props) {
	return (
		<div>
			<p><strong>Here are 3 ways I can help you...</strong></p>
			<p><a href="https://stuartbalcombe.typeform.com/to/kJuj6c" target="_blank"><strong>60-Minute Strategy Call ($199)</strong></a> – Want a gut check on your product direction before commiting to code? Need a quick review of your product from an outside perspective? You'll get a list of actionable takeaways and a recording of our discussion.</p>
			<p><Link to='/user-experience-review'><strong>Custom UX Review ($495)</strong></Link> – An actionable audit of your product’s user experience. You’ll get a complete PDF report with a detailed screen-by-screen teardown.</p>
			<p><Link to='/custom-product-design'><strong>Custom UI/UX Design (Starting at $1500 a week)</strong></Link> – Redesign an existing feature or a create a new product. We'll quickly validate your ideas with rapid prototyping and user testing.</p>
		</div>
	)
}