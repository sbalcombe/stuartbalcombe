import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"

//import SubscribeForm from "../components/SubscribeForm"
import Bio from "../components/Bio"
import { rhythm } from "../utils/typography"


class Articles extends React.Component {
	render () {		
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
	    const posts = get(this, 'props.data.allMarkdownRemark.edges')
	    return (
			<div>
				<h1>Articles about building customer-driven products.</h1>
				{posts.map(({ node }) => {
		          const title = get(node, 'frontmatter.title') || node.fields.slug
		          return (
		            <div style={{ margin: '1rem 0' }} key={node.fields.slug}>
		              <Link style={{ margin: '1rem 0' }} to={node.fields.slug}>
		                {title}
		              </Link>
		            </div>
		          )
		        })}
		        {/*<SubscribeForm /> */}
		        <hr
		          style={{
		            marginTop: '1.75rem',
		            marginBottom: rhythm(1),
		          }}
		        />
		        <Bio />
		    </div>
	    )
	}
}

export default Articles;

export const pageQuery = graphql`
  query ArticlesQuery {
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
          }
        }
      }
    }
  }
`