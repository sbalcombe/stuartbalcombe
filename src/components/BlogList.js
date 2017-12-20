import React, { Component } from 'react'

class BlogList extends Component {
	render () {
		const siteTitle = get(this, "props.data.site.siteMetadata.title")
    	const posts = get(this, "props.data.allMarkdownRemark.edges")
		return (
	        <h4>Writing</h4>
	        {posts.map(post => {
	          if (post.node.path !== "/404/") {
	            const title = get(post, "node.frontmatter.title") || post.node.path
	            return (
	              <div>
	                <h3
	                  key={post.node.frontmatter.path}
	                  style={{
	                    lineHeight: 1.4,
	                    marginBottom: rhythm(1 / 4),
	                  }}
	                >
	                  <Link
	                    style={{ boxShadow: "none" }}
	                    to={post.node.frontmatter.path}
	                  >
	                    {post.node.frontmatter.title}
	                  </Link>
	                </h3>
	                <small>
	                  {post.node.frontmatter.date}
	                </small>
	                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
	              </div>
	            )
	          }
	        })}
		)
	}
}

export default BlogList;