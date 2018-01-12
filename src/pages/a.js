import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"

import SEO from '../components/SEO'
import Tags from '../components/Tags'
import SubscribeForm from "../components/SubscribeForm"
import Bio from "../components/Bio"
import { rhythm } from "../utils/typography"


class Articles extends React.Component {
	render () {		
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
	    const posts = get(this, 'props.data.allMarkdownRemark.edges')
	    const formProps = {
	      action: '//stuartbalcombe.us16.list-manage.com/subscribe/post?u=48e1b3ba91c1e492cfb326e7a&amp;id=a649588b8b',
	      messages: {
	      	inputPlaceholder: "Your email...",
	      	btnLabel: 'Subscribe',
	        sending: "Sending...",
		    success: "Success! Your email address has been added to the list.",
		    error: "Oops, something went wrong please try again."
		  },
		  styles: {
		    sending: {
		      fontSize: 18,
		      color: "auto"
		    },
		    success: {
		      fontSize: 18,
		      color: "green"
		    },
		    error: {
		      fontSize: 18,
		      color: "red"
		    }
	      }
	    }
	    return (
			<div>
				<SEO description='Stuart Balcombe writing about products. I publish articles about my experience and learnings from building customer-focused products.' />
				<h1>Articles about building customer-driven products.</h1>
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
		              </strong> – {excerpt}
		             </p>
		             <Tags list={node.frontmatter.tags || []} />
		            </div>
		          )
		        })}
		        <h3>I send an occasional newsletter with learnings and updates from building customer-focused products.</h3>
		        <SubscribeForm {...formProps} />
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
            excerpt
            tags
          }
        }
      }
    }
  }
`