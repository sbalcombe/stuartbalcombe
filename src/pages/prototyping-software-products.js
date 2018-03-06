import React from "react"
import Link from "gatsby-link"

import SubscribeForm from '../components/SubscribeForm'
import SEO from '../components/SEO'
import Bio from '../components/Bio'


export default function PrototypingProducts (props) {
	const formProps = {
      action: 'https://stuartbalcombe.us16.list-manage.com/subscribe/post?u=48e1b3ba91c1e492cfb326e7a&amp;id=a649588b8b&amp;&group[4843][4]=true',
      messages: {
      	inputPlaceholder: "Your email...",
      	btnLabel: 'Get the outline',
        sending: "Sending...",
	    success: "Success! Your email address has been added to the list.",
	    error: "Oops, something went wrong please try again."
	  },
    }

  	return (
  		<div>
  			<SEO title='Prototyping Software Products | Stuart Balcombe' description='Do you want to build a software product but don’t know how to code? Prototyping Software Products will help you validate your idea BEFORE writing code saving you time and money.'/>
  			<h1 style={{marginBottom: '1rem'}}>Prototyping Software Products</h1>

  			<h3 style={{marginTop: '0px'}}>Do you want to build a software product but don’t know how to code?</h3>

  			<p>You're probably considering one of these options to build your product:</p>
  			<ol>
  				<li>Hiring a contract developer</li>
  				<li>Learning to code yourself</li>
  			</ol>

  			<p>But it’s not the code you write or the money you pay a developer that will determine the success of you product.</p>
  			<p><strong>What makes a software product successful?</strong> Helping customers solve problems and make progress in their lives.</p>
  			<p>That’s it.</p>
  			<p>Learning how to test and validate your idea BEFORE writing code will save you weeks of development time, thousands of dollars, and ensure you build a product your customers will buy.</p>

  			<p>What you need is a way to test your riskiest assumptions with real customers as quickly as possible.</p>

  			<p>This concise, hands-on book is here to help. Prototyping Software Products will give you the tools you need to validate your idea and build a product people buy. The book is based on years of experience prototyping early-stage software products and working with developers to get them built efficiently.</p>

  			<p>Now you can tap into this experience and start applying it to your own business.</p>

  			<p>You'll learn:</p>
  			<ul>
  				<li>How to <strong>build something people want</strong> by talking to your users.</li>
  				<li>The importance of <strong>testing your product with real users</strong> before you write any code.</li>
  				<li>How to <strong>create a working prototype using existing tools</strong> like Typeform, Zapier and Twilio.</li>
  				<li>How to <strong>demo your product using prototyping tools</strong> like Invision.</li>
  				<li>The steps you should take before and after launch to <strong>get feedback from your users</strong> and improve your product.</li>
  			</ul>
			<h3>Written for non-technical founders, but helpful for anyone building a software product.</h3>

			<p><strong>This book is great for:</strong></p>
			<ul>
				<li><strong>Non-technical founders</strong> who want to spend less time and money to test their idea with real customers.</li>
				<li><strong>Designers and marketers</strong> who want to become indispensable in building and selling real-life software products.</li>
				<li><strong>Developers</strong> who want to sell the products they build. Just because you can write code, doesn’t mean you should start by opening Sublime.</li>
			</ul>

			<p>The principles discussed in the book apply to anyone building a software product. Even if you already know how to write production ready code it should never be the starting point for your product development process. If you don't know how to code, this book will help you validate your idea before hiring a developer.</p>

			<h3>The toolkit you need to build better products.</h3>

			
			<p>Sign up and you'll receive the outline of the book, plus my occasional newsletter about building better products. I’ll be sharing some of the ideas that I’ve collected for the book with my mailing list.</p>
  			
  			<SubscribeForm {...formProps} />
  			<hr style={{ marginTop: '1.75rem', marginBottom: '1.75rem' }} />
  			<Bio />
  		</div>
  	)
}