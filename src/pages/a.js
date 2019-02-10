import React from "react";
import SEO from "../components/SEO";
import get from 'lodash/get'
import Link from "gatsby-link";
import Layout from './../components/Layout';
import NewsletterForm from './../components/NewsletterForm'
import styled from 'react-emotion'
import { graphql } from 'gatsby';

const ContainerSmall = styled.div`
  ${tw`max-w-md mx-auto`};
`

const Accent = styled.span`
  ${tw`font-bold text-indigo-light`};
`

const BlogHeading = styled.div`
  ${tw`my-8 text-lg leading-normal text-grey-darker`};
`

const ArticlesList = styled.div`
  ${tw`border-t border-grey-lighter border-solid border-l-0 border-r-0 border-b-0 py-8`}
`

const ArticleItem = styled.div`
  ${tw`text-grey-darker pb-2 pt-2`};
`

const Heading = styled.h3`
  ${tw`text-xl font-serif font-medium mb-2 `};
`

const HeadingLink = styled(Link)`
  ${tw`text-indigo-light hover:text-indigo font-bold leading-normal`};
`

class BlogIndexPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    return (
      <Layout>
        <ContainerSmall>
          <SEO title="Articles by Stuart Balcombe" description="Articles about building products that make customers successful." />
          <BlogHeading>
            I send a newsletter about building <Accent>better products</Accent>, <Accent>customer success</Accent>, and <Accent>personal growth</Accent>. Get articles like the ones below before they're published by signing up:
          </BlogHeading>
          <NewsletterForm location={this.props.location.pathname} />

          <ArticlesList>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <ArticleItem key={node.fields.slug}>
                <Heading>
                  <HeadingLink to={node.fields.slug}>
                    {title}
                  </HeadingLink>
                </Heading>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </ArticleItem>
            )
          })}
          </ArticlesList>
        </ContainerSmall>
      </Layout>
    );
  }
}

export default BlogIndexPage;

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
          excerpt(pruneLength: 200)
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