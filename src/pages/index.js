import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"

import SEO from '../components/SEO'
import Intro from "../components/Intro"
import QuoteBlock from "../components/QuoteBlock"
import Offerings from "../components/Offerings"
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
        <Offerings />
        <QuoteBlock quoteText="Stuart was critical to Compass's success. His work helped the Compass team execute on more projects, with better results, without needing to hire more project managers." quoteAuthor='– Taylor Sundali, Co-Founder, Compass'/>
        <h4 style={{ marginBottom: rhythm(0.25)}}>Recent posts</h4>
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
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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