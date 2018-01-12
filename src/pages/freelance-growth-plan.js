import React from "react"
import Link from "gatsby-link"

import QuoteBlock from '../components/QuoteBlock.js'
import Button from '../components/Button.js'
import SEO from '../components/SEO'
import Bio from '../components/Bio'

export default function FreelanceGrowthPlan (props) {
	return (
		<span>
			<SEO description='Take your freelance business to the next level. Your personal roadmap to building a more profitable business.' />
			<h1 style={{ marginBottom: '0.25rem' }}>Freelance Growth Plan:</h1>
			<h3 style={{ marginTop: 0, fontWeight: 500 }}>Your personal roadmap to building a more profitable freelance business.</h3>
			
			<p><em>Freelance Growth Plan will prepare you to take your freelance business to the next level. We’ll take a fresh look at your business and put together an actionable plan to increase your income.</em></p>
			<h3>Are you experiencing any of these business challenges while freelancing?</h3>

			
			<ul>
				<li>Potential clients don't quite understand how your services will impact their bottom line.</li>
				<li>You spend hours writing proposals and answering questions for clients who never pay you.</li>
				<li>You hate wasting time sending invoices and chasing client payments.</li>
				<li>You don't have a clear idea of how much you'll make this year and how much is yours to keep.</li>
			</ul>

			<p>If you’re like many freelancers you've read every article and downloaded every course. You're doing great work for your clients, and you might even have a few new referrals lined up.</p>
			<p>But do you have a clear strategy for onboarding new leads and increasing your income? Are your clients paying what you're worth? Do you actually make the hourly rate you invoice your clients?</p>


			<h3>The problem with not having a clear strategy for growing your income…</h3>
			<p>When you think about your freelance business you probably imagine your to-do list.</p>
			<p>Whether you've been running your business for a week or many years there are day to day tasks that have to get done. As a freelancer you have to wear many hats. But between client work, writing proposals and accounting how many hours do you spend thinking about how to grow your income?</p>
			<p><strong>Do you want to make more money from your projects?</strong> You need to present the best solution to your clients problems and charge for the value you provide.</p>
			<p><strong>Do you want to spend less time finding and qualifying new leads?</strong> You need an process to automatically nurture and qualify new prospects.</p>
			<p><strong>Would you like to work with perfect clients on every project?</strong> You need to set clear expectations and position yourself as an expert.</p>
			<h3>You need a clear picture of the value you provide and a strategy to deliver it</h3>
			<ol>
				<li>You need to understand the exact problem your ideal client is hiring you to solve.</li>
				<li>You need to educate potential clients about why you are the best person to solve their problem.</li>
				<li>You need to present your services in a way that aligns your offering with your client's unique needs.</li>
				<li>You need to understand how the financial levers in your business work, so you can adjust them if required.</li>
				<li>Finally, you need processes in place that give you time to deliver the value your promised your clients.</li>
			</ol>

			<h3>I can help</h3>
			<p>For the past few years, I've built automated marketing funnels for <a href='http://www.hellocompass.com/' target='_blank' rel='nofollow'>Compass</a> and the portfolio companies of <a href='https://www.revupfund.com/' target='_blank' rel='nofollow'>Revup</a>. Recently, I've been helping freelancers understand their businesses and identify opportunities for growth.</p>
			<QuoteBlock quoteText="Stuart helped me realize the true value of my services and encouraged me to double my prices. Stuart has a vast knowledge on the freelance industry and I always value his input. I'm so thankful for his advice that pushed me in the right direction." quoteAuthor='– Paige Brunton, Owner, The Paige Studio'/>
			<p><strong>Here's what you'll get:</strong></p>
			<ul>
				<li>An initial 90-minute consultation where I’ll dig deeper into your business and we’ll come up with a plan of action to grow your income.</li>
				<li><strong>Deliverable #1:</strong> I’ll create clear documentation of the process improvements and marketing pillars we discuss.</li>
				<li><strong>Deliverable #2:</strong> I’ll create all the workflows you need to automatically qualify and onboard new clients.</li>
			</ul>
			<p><strong>What it costs (and a bonus option):</strong></p>
			<p>The <strong>Freelance Growth Plan</strong> currently costs $495. Your process documentation and automation setup will be completed within 7 days of our initial consultation. To get started, apply below to tell me more about your business – you'll hear back from me within 48 hours.</p>
			<Button buttonText='Apply for the Freelance Growth Plan' buttonLink='https://stuartbalcombe.typeform.com/to/RCbOPD' />
			<p style={{ marginTop: '0.75rem'}}>All your information will be kept strictly confidential.</p>
			<p>If you’d like ongoing support to help execute your Freelance Growth Plan I offer <strong>Monthly One-to-One Coaching</strong>. Coaching costs $350/month and availability is on a first come first served basis. Here’s what you’ll get:</p>
			<ul>
				<li>A 60-minute one-to-one video call every other week.</li>
				<li>Unlimited access to me via email and Slack.</li>
				<li>Everything included in the <strong>Freelance Growth Plan</strong> when you commit to 3 months of coaching.</li>
			</ul>
			<Button buttonText='Apply for 1-1 coaching' buttonLink='https://stuartbalcombe.typeform.com/to/RCbOPD' />
			<p style={{ marginTop: '0.75rem'}}>All your information will be kept strictly confidential.</p>
			<hr style={{ marginBottom: '1rem' }} />
			<Bio />
		</span>
	)
}