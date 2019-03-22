import React from "react"
import styled from 'react-emotion'
import { Link } from 'gatsby'
import SEO from './../components/SEO'
import Layout from './../components/Layout'
import NewsletterForm from './../components/NewsletterForm'
import guide from '../../content/assets/onboarding.svg'
import claire from '../../content/assets/claire.jpg'
import stuart from '../../content/assets/stuart-standing.png'
import meta from "../../content/assets/twitter-meta.jpg";
require('typeface-playfair-display')
require('typeface-roboto-mono')


const Container = styled.div`
  ${tw`container mx-auto`};
`

const HeroRow = styled.div`
  ${tw`flex flex-wrap -mx-2 border-solid border-l-0 border-t-0 border-b-1 border-r-0 border-grey-lighter items-end`};
`

const HeroImg = styled.img`
  ${tw`mb-0 hidden md:flex items-end`}
`
const Row = styled.div`
  ${tw`flex flex-wrap -mx-2`};
`

const HeroContent = styled.div`
  ${tw`my-8 px-2`};
`

const Welcome = styled.h5`
  ${tw`text-grey-darkest text-3xl font-serif font-medium leading-normal`};
`

const Headline = styled.h1`
  ${tw`text-lg text-grey-darkest leading-normal font-mono font-normal mb-4 font-bold`};
`

const SubHead = styled.h3`
  ${tw`text-xl font-serif mb-3`};
`

const Accent = styled.span`
  ${tw`font-bold text-indigo-light`};
`
const Bold = styled.strong`
  ${tw`font-medium text-grey-darkest`};
`

const GuideBanner = styled.div`
  ${tw`w-full md:w-2/3 rounded-lg shadow p-4`};
`

const TwoThirds = styled.div`
  ${tw`w-full md:w-2/3 px-2`};
`

const OneThird = styled.div`
  ${tw`w-full md:w-1/3 px-2`};
`

const QuoteWrapper = styled.div`
  ${tw`bg-grey-lightest p-4 flex flex-col justify-between leading-normal`};
`

const ItemsCenter = styled.div`
  ${tw`flex items-center`};
`

const QuoteText = styled.p`
  ${tw`text-grey-darker text-normal`};
`

const QuoteAuthorWrapper = styled.div`
  ${tw`text-sm`};
`

const QuoteAuthorName = styled.p`
  ${tw`text-black leading-none mb-1`};
`
const QuoteAuthorTitle = styled.p`
  ${tw`text-grey-dark mb-0`};
`

const QuoteImg = styled.img`
  ${tw`w-10 h-10 rounded-full mr-4 mb-0`}
`

const BodyText = styled.p`
  ${tw`text-lg text-grey-darkest leading-normal font-mono font-normal`};
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const StyledIntLink = styled(Link)`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

class Newsletter extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Subscribe to my Newsletter - Stuart Balcombe" description="Join the people from Google, Amazon, and Drift who subscribe for learnings, observations, and opinions from building customer driven products. Sign up here." img={meta}/>
        <Container>
          <HeroRow>
          <TwoThirds>
          <HeroContent>
            <BodyText>Hey 👋 I'm Stuart Balcombe. I lead product at ConsultDirect and advise early-stage startups on how to understand their customers and ship value faster.</BodyText>
            <BodyText>Every two weeks I share a newsletter with my thoughts about building customer-centric products and personal growth. Here’s an <StyledLink href="https://us16.campaign-archive.com/?u=48e1b3ba91c1e492cfb326e7a&id=ef002747bc" target="_blank" rel="noopener">example</StyledLink> of what you’ll get.</BodyText>
            <NewsletterForm location={this.props.location.pathname} btnText="Sign Me Up" />
            <QuoteWrapper>
              <QuoteText>If you're trying to build great products that create real value in your customers' lives, but you're not on his list already, do yourself a favor & sign up.</QuoteText>
              <ItemsCenter>
                <QuoteImg src={claire} alt="Avatar of Claire Suellentrop"></QuoteImg>
                <QuoteAuthorWrapper>
                  <QuoteAuthorName>Claire Suellentrop</QuoteAuthorName>
                  <QuoteAuthorTitle>Co-founder, <StyledLink href="https://forgetthefunnel.com" target="_blank" rel="noreferrer noopener">Forget the Funnel</StyledLink></QuoteAuthorTitle>
                </QuoteAuthorWrapper>
              </ItemsCenter>
            </QuoteWrapper> 
          </HeroContent>
          
          </TwoThirds>
          <OneThird>
            <HeroImg src={stuart} />
          </OneThird>
          </HeroRow>
          <Row>
          <TwoThirds>
          
          </TwoThirds>
          
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Newsletter;