import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Bio from '../components/Bio'
import './BlogPost.css'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
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
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`