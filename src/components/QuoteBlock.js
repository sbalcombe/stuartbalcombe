import React from 'react'

export default function QuoteBlock (props) {
	return (
		<blockquote>
			<p>{props.quoteText}</p>
			<p>{props.quoteAuthor}</p>
		</blockquote>
	)
}