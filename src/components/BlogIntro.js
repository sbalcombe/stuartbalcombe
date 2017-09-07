import React from 'react';
import SignupForm from './SignupForm';

export default function () {
	return (
		<div>
			<hr />
			<h2 style={{ fontFamily: 'Fjalla One, sans-serif', lineHeight: 1.4 }} >I'm writing about my experience building products</h2>
			<p style={{ fontFamily: 'Cantarell, sans-serif' }} >Get my newsletter, usually once a week – it features long-form essays on what i'm learning and curated links from the writing that's influencing me.</p>
			<SignupForm />
		</div>
	)
}