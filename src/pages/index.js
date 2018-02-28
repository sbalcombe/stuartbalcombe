import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"

import SEO from '../components/SEO'
import Intro from "../components/Intro"
import QuoteBlock from "../components/QuoteBlock"
import Bio from "../components/Bio"
import { rhythm } from "../utils/typography"
import Tags from '../components/Tags'

class Index extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <div>
        <SEO 
          title="Stuart Balcombe | Product Design"
          description="Stuart Balcombe is a product designer from Philadelphia, PA."
        />
        <Intro />
        <QuoteBlock quoteText="Stuart was critical to Compass's success. His work helped the Compass team execute on more projects, with better results, without needing to hire more project managers." quoteAuthor='– Taylor Sundali, Co-Founder, Compass'/>
        <h4 style={{ marginBottom: '0.75rem'}}>Recent articles</h4>
        {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              const excerpt = get(node, 'frontmatter.excerpt') || ''
              return (
                <div style={{ margin: '1rem 0' }} key={node.fields.slug}>
                 <p style={{ marginBottom: 0}}>
                  <strong>
                  <Link style={{ margin: '1rem 0' }} to={node.fields.slug}>
                    {title}
                  </Link>  
                  </strong>
                 </p>
                 <Tags list={node.frontmatter.tags || []} />
                 <span style={{ color: '#000', opacity: 0.59, textTransform: 'uppercase', fontSize: '12px'}}>| {node.frontmatter.date}</span>
                </div>
              )
        })}
        <Link to="/a">See all posts</Link>
        <hr style={{ marginBottom: rhythm(1), marginTop: rhythm(1) }} />
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
  query RecentPostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            tags
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`