import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import SEO from './../components/SEO';
import Layout from './../components/Layout';
import styled from 'react-emotion'
import { graphql } from 'gatsby';
import NewsletterForm from './../components/NewsletterForm'

const ContainerSmall = styled.div`
  ${tw`max-w-md mx-auto`};
`

const Title = styled.h1`
  ${tw`text-3xl lg:text-4xl text-indigo-light mt-6 mb-4 font-serif leading-tight`};
`

const List = styled.ul`
  ${tw`list-reset`};
`

const StyledLink = styled(Link)`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const Card = styled.div`
  ${tw`rounded-lg shadow p-8 hover:shadow-md hover:cursor-pointer h-full`};
`

const SubHead = styled.h3`
  ${tw`text-xl font-serif mb-3`};
`

const BodyText = styled.p`
  ${tw`font-mono text-grey-darker`};
`

const PostDate = styled.p `
  ${tw`text-grey-dark`}
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    // const url = 'https://blog.kylegalbraith.com' + this.props.location.pathname;

    return (
      <Layout>
        <ContainerSmall>
          <SEO title={post.frontmatter.title} description={post.frontmatter.excerpt} />
          {
            post.frontmatter.cover &&
            <Img sizes={post.frontmatter.cover.childImageSharp.sizes} alt={post.frontmatter.title} className="w-full" />
          }
          <Title>
            {post.frontmatter.title}
          </Title>
          <PostDate>
            <span role="img" aria-label="blog post date">📅</span> {post.frontmatter.date}
          </PostDate>
          <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />

          <List>
            <li>
              {
                previous &&
                <StyledLink to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </StyledLink>
              }
            </li>
            <li>
              {
                next &&
                <StyledLink to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
              </StyledLink>
              }
            </li>
          </List>
          <Card>
            <SubHead>Get My Newsletter</SubHead>
            <BodyText>
              New stories, learnings, and tips for building better onboarding straight to your inbox.
            </BodyText>
          <NewsletterForm location={this.props.location.pathname} />
          </Card>
        </ContainerSmall>
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