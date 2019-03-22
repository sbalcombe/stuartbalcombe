import React from "react"
import styled from 'react-emotion'
import { Link } from 'gatsby'
import SEO from './../components/SEO'
import Layout from './../components/Layout'
import NewsletterForm from './../components/NewsletterForm'
import guide from '../../content/assets/onboarding.svg'
import claire from '../../content/assets/claire.jpg'
import headshot from "../../content/assets/stuart.jpg";
require('typeface-playfair-display')
require('typeface-roboto-mono')


const ContainerSmall = styled.div`
  ${tw`max-w-md mx-auto`};
`

const Row = styled.div`
  ${tw`flex flex-wrap -mx-2`};
`

const HeroContent = styled.div`
  ${tw`my-8 px-2 mb-12 pb-4 border-solid border-l-0 border-t-0 border-b-1 border-r-0 border-grey-lighter`};
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

const QuoteWrapper = styled.div`
  ${tw`border-solid border-l-4 border-t-0 border-b-0 border-r-0 border-indigo-light bg-white px-4 flex flex-col justify-between leading-normal mb-12`};
`

const ItemsCenter = styled.div`
  ${tw`flex items-center`};
`

const QuoteText = styled.p`
  ${tw`text-grey-darker text-lg`};
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

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Stuart Balcombe" description="Helping people build better products by focusing on successful customer outcomes." img={headshot}/>
        <ContainerSmall>
          <HeroContent>
            <BodyText>Hi, I'm <Accent>Stuart Balcombe</Accent></BodyText>
            <Headline>I help people build products that create successful outcomes for their customers.</Headline>
            <BodyText>Right now, I’m leading product at <StyledLink href="https://consultdirect.co" target="_blank" rel="noreferrer noopener">ConsultDirect</StyledLink>. I also advise early-stage startups on how to research their customers, prioritize their roadmap, and ship value faster.</BodyText>
            <BodyText>Finally, I write about building products, customer research and personal growth in my <StyledIntLink to="/newsletter">newsletter</StyledIntLink>, <StyledIntLink to="/articles">blog posts</StyledIntLink> and <StyledIntLink to="/guide/intro">guides</StyledIntLink>.</BodyText>
          </HeroContent>

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
            <QuoteWrapper>
              <QuoteText>Nodding violently in agreement with Stuart Balcombe’s newsletter this morning. If you're trying to build great products that create real value in your customers' lives, but you're not on his list already, do yourself a favor & sign up.</QuoteText>
              <ItemsCenter>
                <QuoteImg src={claire} alt="Avatar of Claire Suellentrop"></QuoteImg>
                <QuoteAuthorWrapper>
                  <QuoteAuthorName>Claire Suellentrop</QuoteAuthorName>
                  <QuoteAuthorTitle>Co-founder, <StyledLink href="https://forgetthefunnel.com" target="_blank" rel="noreferrer noopener">Forget the Funnel</StyledLink></QuoteAuthorTitle>
                </QuoteAuthorWrapper>
              </ItemsCenter>
            </QuoteWrapper> 
            <BodyText>
              Join product people from <Bold>Hubspot</Bold>, <Bold>Google</Bold> and <Bold>Amazon</Bold> and get my bi-monthly newsletter. Here’s an <StyledLink href="https://us16.campaign-archive.com/?u=48e1b3ba91c1e492cfb326e7a&id=ef002747bc" target="_blank" rel="noopener">example</StyledLink> of what you’ll get.
            </BodyText>
            <NewsletterForm location={this.props.location.pathname} />
        </ContainerSmall>
      </Layout>
    )
  }
}

export default Index;