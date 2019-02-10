import React from 'react'
import SEO from './../../components/SEO'
import Layout from './../../components/Layout'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Welcome = styled.h1`
  ${tw`text-3xl font-serif`};
`


class Resources extends React.Component {
	render () {
		return (
			<Layout>
				<Welcome>Resources</Welcome>
				<iframe className="airtable-embed" src="https://airtable.com/embed/shrCCyEcX3hk8ihP0?backgroundColor=gray&viewControls=on" frameBorder="0" width="100%" height="533"></iframe>
			</Layout>
		)
	}
}

export default Resources;