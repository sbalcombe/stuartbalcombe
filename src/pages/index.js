import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"

import SEO from '../components/SEO'
import Intro from "../components/Intro"
import QuoteBlock from "../components/QuoteBlock"
import Bio from "../components/Bio"
import { rhythm } from "../utils/typography"

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div>
        <SEO 
          title={siteTitle}
          description="Stuart Balcombe is a product designer from Philadelphia, PA."
        />
        <Intro />
        <QuoteBlock quoteText="Stuart was critical to Compass's success. His work helped the Compass team execute on more projects, with better results, without needing to hire more project managers." quoteAuthor='– Taylor Sundali, Co-Founder, Compass'/>
        <hr style={{ marginBottom: rhythm(1) }} />
        <Bio />
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object
}

export default Index;