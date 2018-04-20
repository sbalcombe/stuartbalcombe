import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"

import SEO from '../components/SEO'
import Intro from "../components/Intro"
import QuoteBlock from "../components/QuoteBlock"
import { rhythm } from "../utils/typography"
import Tags from '../components/Tags'
import SubscribeForm from "../components/SubscribeForm"

class Index extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
     const formProps = {
        action: '//stuartbalcombe.us16.list-manage.com/subscribe/post?u=48e1b3ba91c1e492cfb326e7a&amp;id=a649588b8b',
        messages: {
          inputPlaceholder: "Your email address...",
          btnLabel: 'Subscribe Now',
          sending: "Sending...",
        success: "Success! Your email address has been added to the list.",
        error: "Oops, something went wrong please try again."
      },
    }
    return (
      <div>
        <SEO 
          title="Stuart Balcombe | UX & Product Designer | Philadelphia"
          description="Stuart Balcombe is an independent UX designer who helps people build more profitable SaaS products by focusing on their customers."
        />
        <Intro />
        
        <p style={{ marginTop: '3.5rem' }}>
            Get access to my occasional newsletter where I share everything I know about product strategy, UX design and customer research.
        </p>
        <SubscribeForm {...formProps} />
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object
}

export default Index;

export const pageQuery = graphql`
  query RecentPostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
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