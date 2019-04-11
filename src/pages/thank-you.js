import React from "react"
import SEO from './../components/SEO'
import Layout from './../components/Layout'
import Link from "gatsby-link";
import styled from 'react-emotion'
import headshot from "../../content/assets/stuart.jpg";
import get from 'lodash/get'
import { graphql } from 'gatsby';

const ContainerSmall = styled.div`
  ${tw`max-w-md mx-auto`};
`

const Welcome = styled.h1`
  ${tw`text-3xl font-serif font-bold my-8 text-indigo-light`};
`

const List = styled.ul`
  ${tw`list-reset`};
`

const SubHead = styled.h3`
  ${tw`text-xl font-serif mb-3 mt-12 text-indigo-light`};
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const InternalLink = styled(Link)`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const Duration = styled.div`
  ${tw`no-underline text-grey text-sm`};
`

const Accent = styled.span`
  ${tw`font-bold text-grey-darker`};
`

const ArticlesList = styled.div`
  ${tw`border-t border-grey-lighter border-solid border-l-0 border-r-0 border-b-0 py-4`}
`

const ArticleItem = styled.div`
  ${tw`text-grey-darker pb-2 pt-2`};
`

const Heading = styled.h3`
  ${tw`text-lg font-serif font-medium mb-2 `};
`

const HeadingLink = styled(Link)`
  ${tw`text-grey-dark hover:underline font-bold leading-normal`};
`

class ThankYou extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    return (
      <Layout>
        <SEO title="You're awesome! Thanks for signing up." description="Thanks for subscribing to my bi-monthly newsletter." img={headshot}/>
        <ContainerSmall>
          <Welcome>Thanks for jumping on board!</Welcome>
          <SubHead>Archives</SubHead>
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
              </ArticleItem>
            )
          })}
          </ArticlesList>
        </ContainerSmall>
      </Layout>
    )
  }
}

export default ThankYou;

export const pageQuery = graphql`
  query NewsletterQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 3,sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
          }
        }
      }
    }
  }
`