import React from 'react'
import SubscribeForm from "../components/SubscribeForm"

export default function NewsletterSignUp (props) {
	const formProps = {
      action: '//stuartbalcombe.us16.list-manage.com/subscribe/post?u=48e1b3ba91c1e492cfb326e7a&amp;id=a649588b8b',
      messages: {
      	inputPlaceholder: "Your email...",
      	btnLabel: 'Subscribe',
        sending: "Sending...",
	    success: "Success! Your email address has been added to the list.",
	    error: "Oops, something went wrong please try again."
	  },
	  styles: {
	    sending: {
	      fontSize: 18,
	      color: "auto"
	    },
	    success: {
	      fontSize: 18,
	      color: "green"
	    },
	    error: {
	      fontSize: 18,
	      color: "red"
	    }
      }
    }
	return (
		<div style={{ marginTop: '2rem' }}>
			<h3>{props.sell}</h3>
			<SubscribeForm {...formProps} />
		</div>
	)
}