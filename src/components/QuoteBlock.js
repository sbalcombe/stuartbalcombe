import React from 'react'
import Link from "gatsby-link"

export default function QuoteBlock (props) {
	return (
		<blockquote>
			<p>{props.quoteText}</p>
			<p>{props.quoteAuthor}</p>
		</blockquote>
	)
}