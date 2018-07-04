import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"

import SEO from '../components/SEO'
import Tags from '../components/Tags'
import NewsletterSignup from "../components/NewsletterSignup"
import '../components/SubscribeForm.css'


class Articles extends React.Component {
	render () {		
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
	    const posts = get(this, 'props.data.allMarkdownRemark.edges')
	    return (
			<div>
				<SEO title="Stuart Balcombe writing: articles about building customer focused products." description='Stuart Balcombe writing about products. I publish articles about my experience and learnings from building customer-focused products.' />
				<h1>Learnings from building customer-focused products.</h1>
				<h4>Articles by category</h4>
				<ul className="tags">
			        <li><strong><Link to='/tags/product-management/'>Product Management</Link></strong></li>
			        <li><strong><Link to='/tags/web-app-challenge/'>Web App Challenge</Link></strong></li>
			        <li><strong><Link to='/tags/life'>Life</Link></strong></li>

			    </ul>
				
				<h4>All articles</h4>

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
		             <span style={{ color: '#000', opacity: 0.59, textTransform: 'uppercase', fontSize: '12px'}}>| {node.frontmatter.date}</span>
		            </div>
		          )
		        })}
		        <h3>I send an occasional newsletter with learnings and updates from building customer-focused products.</h3>
		        <NewsletterSignup />
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
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`