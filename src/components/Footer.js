import React from 'react'
import Link from "gatsby-link"

export default function () {
	return (
		<footer style={{ margin: '30px auto 70px auto' }}>
			<p>
				<Link>Articles</Link>
				<Link to='https://www.letssail.co/' target='_blank'>Sail</Link>
				<Link>About</Link>
			</p>
		</footer>
	)
}