import React from "react"
import styled from 'react-emotion'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import NewsletterForm from '../components/NewsletterForm'
import guide from '../images/onboarding.svg'
require('typeface-playfair-display')
require('typeface-roboto-mono')

const Row = styled.div`
  ${tw`flex flex-wrap -mx-2`};
`

const HeroContent = styled.div`
  ${tw`w-full md:w-2/3 my-8 px-2`};
`

const Welcome = styled.h5`
  ${tw`text-3xl font-serif font-medium`};
`

const Headline = styled.h1`
  ${tw`text-lg leading-normal font-mono font-normal`};
`

const SubHead = styled.h3`
  ${tw`text-xl font-serif mb-3`};
`

const Accent = styled.span`
  ${tw`font-bold text-indigo-light`};
`

const GuideBanner = styled.div`
  ${tw`w-full md:w-2/3 rounded-lg shadow p-4`};
`

const TwoThirds = styled.div`
  ${tw`w-full md:w-2/3 px-2 mb-8 md:mb-0`};
`

const OneThird = styled.div`
  ${tw`w-full md:w-1/3 px-2`};
`

const Card = styled.div`
  ${tw`rounded-lg shadow p-4 hover:shadow-md hover:cursor-pointer h-full`};
`
const GuideContent = styled.div`
  ${tw`w-1/2`};
`
const GuideImg = styled.img`
  ${tw`w-1/2 p-4 h-full mb-0 mt-4`};
`

const BodyText = styled.p`
  ${tw`font-mono text-sm max-w-xs`};
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`
class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO data="" />
        <Row>
          <HeroContent>
            <Welcome>Hello, I'm <Accent>Stuart Balcombe</Accent></Welcome>
            <Headline>I help B2B software companies increase activation and reduce churn by <StyledLink href="https://www.onboardingops.com">improving their onboarding</StyledLink>.</Headline>
          </HeroContent>
        </Row>
        <Row>
          <TwoThirds>
            <Card>
            <Row>
            <GuideContent>
              <SubHead>Onboarding Field Guide</SubHead>
              <BodyText>An actionable, research backed guide for taking customers from signed up to successful.</BodyText>
            </GuideContent>
            <GuideImg src={guide}></GuideImg>
            </Row>
            </Card>
          </TwoThirds>
          <OneThird>
            <Card>
            <SubHead>Get My Newsletter</SubHead>
            <BodyText>
              New stories, learnings, and tips for building better onboarding straight to your inbox.
            </BodyText>
            <NewsletterForm />
            </Card>
          </OneThird>
        </Row>
      </Layout>
    )
  }
}

export default Index;