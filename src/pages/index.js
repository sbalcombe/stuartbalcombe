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
    const recentPosts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <div>
        <SEO 
          title={siteTitle}
          description="Stuart Balcombe is a product designer from Philadelphia, PA."
        />
        <Intro />
        {/* <QuoteBlock quoteText='Stuart’s been a godsend for us. Not only did he interpret our needs perfectly, but he was proactive about making additional design suggestions that enhanced our new product.' quoteAuthor='– Mike Wilner, CEO, Sail'/> */}
        <h4>Work</h4>
        {recentPosts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div style={{ margin: '1rem 0' }} key={node.fields.slug}>
              <Link style={{ margin: '1rem 0' }} to={node.fields.slug}>
                {title}
              </Link>
              <p dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} />
            </div>
          )
        })}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object
}

export default Index;

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
          fields {
            slug
          }
          frontmatter {
            title
            category
            excerpt
          }
        }
      }
    }
  }
`