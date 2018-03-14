import React from 'react'
import './SubscribeForm.css'

const PodiaForm = props => {
	return (
		<form action={props.action} acceptCharset="UTF-8" method="post">
			<input name="utf8" type="hidden" value="✓" />
			<input type="email" className="subscribe-input" name="email" required="required" placeholder="Email" />
			<input type="submit" className="subscribe-button" value={props.cta} />
		</form>
	)
}

export default PodiaForm;