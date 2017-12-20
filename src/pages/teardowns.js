import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

class Teardowns extends React.Component {
  render() {
  	return (
  		<div>
  			<Helmet title={get(this, "props.data.site.siteMetadata.title")} />
  			onboarding teardwons
  		</div>
  	)
  }
}

export default Teardowns;