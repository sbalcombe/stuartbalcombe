import React from "react"
import Link from "gatsby-link"

import SEO from '../components/SEO'
import Offerings from '../components/Offerings'
import Bio from '../components/Bio'
import { rhythm } from "../utils/typography"

export default function WorkWithMe (props) {
	return (
		<span>
			<SEO />
			<h1>Let's work together.</h1>
			<p>For your convenience, I offer my consulting services as fixed-price packages. I love working with creative people trying to solve customer problems. If you have any questions, shoot me an email at <a style={{ boxShadow: 'none'}}href='mailto:stuartbalcombe@gmail.com'>stuartbalcombe@gmail.com</a>.</p>
			<Offerings />
			<hr style={{ marginBottom: rhythm(1) }} />
			<Bio />
		</span>
	)
}