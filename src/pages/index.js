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
          title="Stuart Balcombe | Product Design"
          description="Stuart Balcombe is a product designer who helps people build better products by focusing on their customers. He's currently writing a book called Prototyping Software Products."
        />
        <Intro />
        <SubscribeForm {...formProps} />
        <QuoteBlock quoteText="Stuart was critical to Compass's success. His work helped the Compass team execute on more projects, with better results, without needing to hire more project managers." quoteAuthor='– Taylor Sundali, Co-Founder, Compass'/>
        <h4 style={{ marginBottom: '0.75rem'}}>Prototyping software products (eBook)</h4>
        <p style={{ marginBottom: '0.75rem'}}><strong>Want to build a product people actually buy?</strong> This concise guide will teach you how to test and validate your ideas with real customers BEFORE spending time and money writing code.</p>
        <Link to="/prototyping-software-products">Learn more and get a free sample</Link>
        <h4 style={{ marginBottom: '0.75rem'}}>Recent articles</h4>
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
                  </strong>
                 </p>
                 <Tags list={node.frontmatter.tags || []} />
                 <span style={{ color: '#000', opacity: 0.59, textTransform: 'uppercase', fontSize: '12px'}}>| {node.frontmatter.date}</span>
                </div>
              )
        })}
        <Link to="/a">See all posts</Link>
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