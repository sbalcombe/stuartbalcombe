import React from "react"
import SEO from './../components/SEO'
import Layout from './../components/Layout'
import NewsletterForm from './../components/NewsletterForm'
import styled from 'react-emotion'
import headshot from "./../images/stuart.jpg";

const ContainerXS = styled.div`
  ${tw`max-w-sm pt-8 border-solid border-t-1 border-l-0 border-b-0 border-r-0 border-grey-lighter`};
`

const ContainerSmall = styled.div`
  ${tw`max-w-md mx-auto`};
`

const Welcome = styled.h1`
  ${tw`text-3xl font-serif font-bold my-8 mb-4 text-indigo-light`};
`

const List = styled.ul`
  ${tw`list-reset`};
`

const ProductList = styled.div `
  ${tw`my-8`};
`

const ProductLink = styled.a`
  ${tw`text-xl font-serif mb-4 mt-12 text-indigo-light font-bold no-underline hover:underline`};
`

const ProductDescription = styled.p`
  ${tw`mt-2 text-grey-darker`};
`

class Products extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Products built by Stuart Balcombe" description="A collection of products and services by Stuart Balcombe." img={headshot} />
        <ContainerSmall>
          <Welcome>Products</Welcome>
          <p>Here are a few products I’ve built & launched:</p>
          <ProductList>
          <ProductLink href="https://www.paymentlink.me" target="_blank" rel="noreferrer noopener">PaymentLink</ProductLink>
          <ProductDescription>A simple tool to help client service businesses accept payments online simply and securely.</ProductDescription>

          <ProductLink href="https://www.mygolfweb.co" target="_blank" rel="noreferrer noopener">My Golf Web</ProductLink>
          <ProductDescription>I built this tiny product and service after I saw coaches searching for ways to monetize their audience and expertise online.</ProductDescription>

          </ProductList>
          <ContainerXS>
          <p>I send a bi-monthly newsletter about building better products by focusing on customer outcomes.</p>
          <NewsletterForm location={this.props.location.pathname} />
          </ContainerXS>
        </ContainerSmall>
      </Layout>
    )
  }
}

export default Products;