import React from "react"
import SEO from '../components/SEO'
import Layout from '../components/layout'

class About extends React.Component {
  render() {
    return (
      <Layout>
        <p className="mb-8">
            About
        </p>
        <h3>Right now</h3>
        <h3>Previously</h3>
      </Layout>
    )
  }
}

export default About;