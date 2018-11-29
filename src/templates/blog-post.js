import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import styled from 'react-emotion'
import { graphql } from 'gatsby';

const Title = styled.h1`
  ${tw`text-3xl lg:text-5xl text-indigo-darker font-normal mt-6 mb-2 font-serif`};
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    // const url = 'https://blog.kylegalbraith.com' + this.props.location.pathname;

    return (
      <Layout>
        <div>
          <SEO data={post} />
          {
            post.frontmatter.cover &&
            <Img sizes={post.frontmatter.cover.childImageSharp.sizes} alt={post.frontmatter.title} className="w-full" />
          }
          <Title>
            {post.frontmatter.title}
          </Title>
          <p className="block mb-8 pb-4 border-b-2">
            <span role="img" aria-label="blog post date">📅</span> {post.frontmatter.date}
          </p>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />

          <ul>
            <li>
              {
                previous &&
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              }
            </li>
            <li>
              {
                next &&
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
              </Link>
              }
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 280)
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        
      }
    }
  }
`