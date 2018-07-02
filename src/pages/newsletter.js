import React from "react"
import Link from "gatsby-link"
import NewsletterSignup from '../components/NewsletterSignup'
import '../components/SubscribeForm.css'

export default function Newsletter (props) {
	return (
		<span>
			<h1>My Newsletter</h1>
			<p>I send an occasional newsletter (roughly once a month) with stories, tips and learnings for building software products in 2018.</p>
			<p>I typically write about:</p>
			<ul>
				<li>Product Management</li>
				<li>UX Design</li>
				<li>Starting and building an independent business</li>
			</ul>
			<p>See you inside.</p>
			<NewsletterSignup />
		</span>
	)
}