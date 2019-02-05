import React from "react"
import styled from 'react-emotion'
import { Link } from 'gatsby'
import SEO from './../components/SEO'
import Layout from './../components/Layout'
import NewsletterForm from './../components/NewsletterForm'
import guide from './../images/onboarding.svg'
require('typeface-playfair-display')
require('typeface-roboto-mono')

const Row = styled.div`
  ${tw`flex flex-wrap -mx-2`};
`

const HeroContent = styled.div`
  ${tw`w-full md:w-2/3 my-8 px-2`};
`

const Welcome = styled.h5`
  ${tw`text-3xl font-serif font-medium leading-normal`};
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

const GuideContent = styled(Link)`
  ${tw`w-full md:w-1/2 no-underline text-black md:mt-8 p-4`};
`
const GuideImg = styled.img`
  ${tw`w-full md:w-1/2 p-4 h-full mb-0 mt-4`};
`

const BodyText = styled.p`
  ${tw`font-mono text-grey-dark`};
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const StyledIntLink = styled(Link)`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Stuart Balcombe | Building products that make customers successful." description="Helping build better products by focusing on successful customer outcomes. Always learning." />
        <Row>
          <HeroContent>
            <Welcome>Hi, I'm <Accent>Stuart Balcombe</Accent></Welcome>
            <Headline>I believe the best way to build better products is to focus on helping customers achieve successful outcomes.</Headline>
          </HeroContent>
        </Row>
        <Row>
          {/*<TwoThirds>
            <Card>
            <Row>
            <GuideContent to="/onboarding-guide/intro" alt="Read onboarding field guide">
              <SubHead>Onboarding Field Guide</SubHead>
              <BodyText>An actionable, research backed guide for taking customers from signed up to successful.</BodyText>
            </GuideContent>
            <GuideImg src={guide} alt="Illustration of woman completing checklist"></GuideImg>
            </Row>
            </Card>
          </TwoThirds> */}
          <TwoThirds> 
            <BodyText>
              I write a bi-monthly newsletter about product, customer research and personal growth. Here’s an <StyledLink href="https://us16.campaign-archive.com/?u=48e1b3ba91c1e492cfb326e7a&id=ef002747bc" target="_blank" rel="noopener">example</StyledLink> of what you’ll get.
            </BodyText>
            <NewsletterForm location={this.props.location.pathname} />
          </TwoThirds>
        </Row>
      </Layout>
    )
  }
}

export default Index;