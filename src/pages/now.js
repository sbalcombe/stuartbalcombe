import React from 'react'
import Link from 'gatsby-link'

import SubscribeForm from '../components/SubscribeForm'
import Bio from '../components/Bio'

export default function Now (props) {
	const formProps = {
      action: '//stuartbalcombe.us16.list-manage.com/subscribe/post?u=48e1b3ba91c1e492cfb326e7a&amp;id=a649588b8b',
      messages: {
      	inputPlaceholder: "Your email...",
      	btnLabel: 'Subscribe',
        sending: "Sending...",
	    success: "Success! Your email address has been added to the list.",
	    error: "Oops, something went wrong please try again."
	  },
    }
	return (
		<div>
			<h1 style={{ marginBottom: '0.75rem'}}>What I'm doing right now.</h1>
			<p style={{ marginTop: 0, color: '#000', opacity: 0.54, textTransform: 'uppercase', fontWeight: 500}}>Last updated: 06/18/2018</p>

			<ul>
				<li>Building a more transparent way for enterprise companies to hire independent talent at <a href="https://consultdirect.co" target="_blank" rel="nofollow">ConsultDirect</a>.</li>
				<li>Helping SaaS founders find product-market fit through user research and <Link to="/work-with-me">UX design</Link>.</li>
				<li>Creating a simple way for creative agencies to <a href="https://www.paymentlink.me" target="_blank" rel="nofollow">automate recurring client payments</a>.</li>
			</ul>

			<p>Inspired by Derek Sivers and the <a href="https://nownownow.com/" target="_blank">/now movement</a>.</p>

			<h3 style={{ fontWeight: 500 }}>Learn how to test and validate your product idea with real users BEFORE writing any code.</h3>
	        <SubscribeForm {...formProps} />
	        <hr
	          style={{
	            marginTop: '1.75rem',
	            marginBottom: '1.75rem',
	          }}
	        />
	        <Bio />
		</div>
	)
}