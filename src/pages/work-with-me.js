import React from "react"
import Link from "gatsby-link"

import SEO from '../components/SEO'
import Offerings from '../components/Offerings'
import Bio from '../components/Bio'
import { rhythm } from "../utils/typography"

export default function WorkWithMe (props) {
	return (
		<span>
			<SEO title="Stuart Balcombe | UX & Product Designer | Philadelphia"/>
			<h1>Let's work together.</h1>
			<p>I help people understand their customers and build better products. I love working with creative people trying to solve challenging problems. If you have any questions about my offerings below, shoot me an email at <a style={{ boxShadow: 'none'}}href='mailto:stuartbalcombe@gmail.com'>stuartbalcombe@gmail.com</a>.</p>
			<Offerings />
			<hr style={{ marginBottom: rhythm(1) }} />
			<Bio />
		</span>
	)
}