import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

import About from "../components/About"
import BlogIntro from "../components/BlogIntro"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")

    return (
      <div>
        <Helmet> 
          <title>{get(this, "props.data.site.siteMetadata.title")}</title>
          <meta name="description" content="Product Designer" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@stubalcombe" />
          <meta name="twitter:title" content="Stuart Balcombe" />
          <meta name="twitter:description" content="Product Designer" />
          <meta name="twitter:creator" content="@stubalcombe" />
          <meta name="twitter:image" content="https://www.stuartbalcombe.com/static/profile-pic.9c85a375.jpg" />

          <meta property="og:title" content="Stuart Balcombe" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://www.stuartbalcombe.com/" />
          <meta property="og:image" content="https://www.stuartbalcombe.com/static/profile-pic.9c85a375.jpg" />
          <meta property="og:description" content="Product Designer" /> 
          <meta property="og:site_name" content="Stuart Balcombe" />
        </Helmet>
        <About />
        {/*
        <BlogIntro />
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
        */}
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
}

export default BlogIndex

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
