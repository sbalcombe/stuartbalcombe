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
			<h1>What I'm doing right now.</h1>

			<p>You've reached <Link to='/'>Stuart Balcombe's</Link> <a href="https://nownownow.com/" target="_blank">now</a> page.</p>

			<ul>
				<li>The day job. Director of Product at <a href="https://joinaya.com" target="_blank" rel="nofollow">Association of Young Americans</a>.</li>
				<li>Helping SaaS founders find product-market fit through user research and <Link to="/work-with-me">UX design</Link>.</li>
				<li>Writing an eBook about <Link to="/prototyping-software-products">prototyping software products</Link>.</li>
				<li>Sharing everything I learn about building customer focused product with my newsletter.</li>
			</ul>

			<h5 style={{ marginTop: 0, color: '#000', opacity: 0.54, textTransform: 'uppercase', fontWeight: 500}}>Last updated: 03/07/2018</h5>

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