import React from "react"
import Link from "gatsby-link"

import SEO from '../components/SEO'
import QuoteBlock from '../components/QuoteBlock'
import Button from '../components/Button'
import Bio from '../components/Bio'

export default function ProductLeadership (props) {
  	return (
  		<div>
  			<SEO title="Product Leadership for Teams | Philadelphia" description=''/>
  			<h1 style={{ marginBottom: '0.25rem' }}>Product Leadership for Teams</h1>
			<h3 style={{ marginTop: 0, fontWeight: 500 }}>Build a product team that ships continuous value to customers.</h3>
			<p>Unless you have a product person on the founding team, it’s not uncommon for early-stage SaaS companies to operate without a dedicated product owner. <strong>This means someone else (usually the CEO) is forced to lead product strategy and become a micromanager with time they need to be spending elsewhere.</strong></p>
			<p>Imagine if your team had personal, direct access to an expert product owner. <strong>Imagine if your product team had the support and resources to:</strong></p>
			<ul>
				<li>Develop and execute a customer driven product roadmap.</li>
				<li>Continuously ship value to customers.</li>
				<li>Effectively prioritize development based on your unique business needs.</li>
			</ul>

			<p>When you bring me on as your product owner you won’t have to worry about micromanaging your development team, or creating a strategic product roadmap by yourself.</p>
			<p>Instead, your team will be empowered with the processes and guidance they need to continuously ship value to customers and achieve your business goals.</p>
			<p>As your company grows, and your product team becomes more mature, this investment will only increase in value.</p>

			<h3>What's it like to work with you?</h3>
			<p>Here’s what a few folks have said about working with me:</p>
			<QuoteBlock quoteText="Stuart is one of the most voracious learners I've ever met, and it makes him an incredible product person. He learns about, understands, and practices industry-leading product principles that span from product marketing, to product management, to product design. His experience and consideration of all three disciplines makes him a very effective full-stack product person.

He also builds products without ego – he's ruthlessly focused on building a product that's ideal for the customer as quickly as possible. He focuses on starting small and iterating as quickly as possible by being in close contact with customers. 

If you want someone who will help you get to the right product as quickly as possible with as little wasted resources as possible, Stuart is your guy." quoteAuthor='– Mike Wilner, CEO, Sail & Compass'/>
			<QuoteBlock quoteText="Working with Stuart is a pleasure — he is a thoughtful, proactive product leader with a breadth of skills positioning him to get his hands dirty. On the hands-dirty side, Stuart took charge of customer research, design, UX, and prototyping to great effect. As a leader, Stuart collaborated with engineering management to get buy-in and set scope, worked directly with individual engineers on implementation issues, and deftly coordinated across product and and non-product stakeholders." quoteAuthor='– Matt Fulton, CTO, Sail & Compass'/>

			<h3>Ready to get started?</h3>
  			<p>Availability is limited. To ensure you receive an excellent experience I only take on 1 Product Leadership for Teams client at a time.</p>
  			<p>The service name currently costs $3500 a month. A minimum 3-month engagement is recommended to ensure we see results. Here’s what’s included each month.</p>
  			<ul>
  				<li>Weekly 1-1 strategy sessions.</li>
  				<li>Guidance on creating and implementing a repeatable product development process, tailored to your team and business goals.</li>
  				<li>Hands on support to get out of the weeds and focus on shipping value to customers.</li>
  				<li>Product strategy advice to sharpen your vision and build a roadmap focused on customer research.</li>
  				<li>Ongoing communication via Slack or email.</li>
  				<li>Tools, templates, frameworks and spreadsheets that will help your team be more efficient.</li>
  				<li>Curated library of resources covering product development topics relevant to your business.</li>
  			</ul>
  			<Button buttonText='Contact Me to Get Started' buttonLink='mailto:stuartbalcombe@gmail.com' />
			<p style={{ marginTop: '0.75rem'}}>All your information will be kept strictly confidential.</p>
			<hr style={{ marginBottom: '1rem' }} />
			<Bio />
  		</div>
  	)
}