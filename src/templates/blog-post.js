import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import SEO from '../components/SEO'
import NewsletterSignUp from '../components/NewsletterSignup'
import './BlogPost.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    let workMeta
    if (post.frontmatter.category === 'work') {
      workMeta = (
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-block', marginRight: '3rem' }}>
            <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.7em', opacity: 0.54 }}>Role</span>
            <strong>Director of Product</strong>
          </div>
          <div style={{ display: 'inline-block'}}>
            <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.7em', opacity: 0.54 }}>Company</span>
            <strong>Sail</strong>
          </div>
        </div>
      )
    }
    return (
      <div>
        <SEO 
          title={`${post.frontmatter.title} - ${siteTitle}`}
          description={post.frontmatter.excerpt}
        />
        <h1 style={{ marginBottom: '0.5rem'}}>{post.frontmatter.title}</h1>
        <p><small>{post.frontmatter.date}</small></p>
        {workMeta}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <NewsletterSignUp sell={post.frontmatter.sell} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        excerpt
        sell
      }
    }
  }
`