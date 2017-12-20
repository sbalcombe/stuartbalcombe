import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"

import SEO from '../components/SEO'
import Intro from "../components/Intro"
import Offerings from "../components/Offerings"
import QuoteBlock from "../components/QuoteBlock"
import { rhythm } from "../utils/typography"

class Index extends React.Component {
  render() {
    return (
      <div>
        <SEO />
        <Intro />
        <Offerings />
        <QuoteBlock quoteText='Jane’s been a godsend for us. Not only did she interpret our needs perfectly, but she was proactive about making additional design suggestions that enhanced our new product.' quoteAuthor='– Vince Drahman'/>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object
}

export default Index;
/*
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
*/
