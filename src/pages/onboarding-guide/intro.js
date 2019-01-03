import React from "react"
import SEO from './../../components/SEO'
import Layout from './../../components/Layout'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import NewsletterForm from './../../components/NewsletterForm'
import guide from './../../images/onboarding.svg'


const Card = styled.div`
  ${tw`rounded-lg shadow px-8 hover:shadow-md hover:cursor-pointer h-full mt-16`};
`

const SubHead = styled.h3`
  ${tw`text-xl font-serif mb-3 pt-8`};
`

const Quote = styled.blockquote`
  ${tw`border-l-4 border-indigo pl-4 ml-0`};
`

const SmallHeading = styled.h5`
  ${tw`font-bold font-mono my-4`}
`

const BodyText = styled.p`
  ${tw`font-mono text-sm`};
`

const List = styled.ul`
  ${tw`list-reset ml-0 mb-0 text-sm`};
`

const Banner = styled.div`
  ${tw`pt-16 pb-8 bg-indigo-lightest text-3xl font-serif font-normal mb-16 rounded text-center`};
`
const BannerHeading = styled.div`
  ${tw`text-4xl font-serif font-black text-grey-darkest text-center leading-normal`};
`

const Welcome = styled.h1`
  ${tw`text-3xl font-serif`};
`

const ContainerSmall = styled.div`
  ${tw`max-w-md mx-auto`};
`

const Row = styled.div`
  ${tw`flex flex-wrap -mx-2 items-start`};
`

const ThreeFifths = styled.div`
  ${tw`w-full md:w-3/5 px-2 mb-8 md:mb-0 pr-8`};
`

const TwoFifths = styled.div`
  ${tw`w-full md:w-2/5 px-2 mb-8 md:mb-0 bg-grey-lightest p-4`};
`

const ContentListItem = styled.li`
  ${tw`text-sm`};
`

const ContentListItemLast = styled.li`
  ${tw`text-sm mb-0`};
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const StyledIntLink = styled(Link)`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const GuideImg = styled.img`
  ${tw`w-2/5 mb-0 mt-8`};
`

class Intro extends React.Component {
  render() {
    return (
      <Layout>
      	<Banner>
      		<BannerHeading>Onboarding Field Guide</BannerHeading>
          <GuideImg src={guide} alt="Illustration of woman completing checklist"></GuideImg>
      	</Banner>
      	<ContainerSmall>

        <Welcome>Intro</Welcome>

        <Row>
          <ThreeFifths>
            <BodyText>The onboarding field guide will teach you how to guide new customers from signup to success.</BodyText>
            <BodyText>The guide is not intended to be a series of silver bullet growth hacks (I don’t believe they exist) but instead is focused on, long-term strategies that you can use to grow your business sustainably.</BodyText>
            <BodyText>This guide is an ongoing project that represents the synthesis of everything I've learned researching and implementing onboarding.</BodyText>
          </ThreeFifths>

          <TwoFifths>
            <List>
              <ContentListItem>- Why improve onboarding</ContentListItem>
              <ContentListItem>- Understanding customers</ContentListItem>
              <ContentListItem>- Measuring onboarding</ContentListItem>
              <ContentListItem>- Landing pages</ContentListItem>
              <ContentListItem>- Onboarding UI patterns</ContentListItem>
              <ContentListItem>- Email campaigns</ContentListItem>
              <ContentListItem>- Concierge onboarding</ContentListItem>
              <ContentListItem>- Personalization</ContentListItem>
              <ContentListItemLast>- Resource Library</ContentListItemLast>
            </List>
          </TwoFifths>
        </Row>

        <SubHead>Why I'm writing this guide</SubHead>
        <BodyText>I started my career as a "growth hacker" but in 2016 I attended a talk that changed my perspective on where growth really comes from. At the Boston leg of Intercom's World Tour, then Director of Growth Ben McRedmond shared his discomfort with the typical <StyledLink href="https://www.intercom.com/blog/videos/how-do-you-define-a-growth-team/" target="_blank">definition of growth</StyledLink>. The notion that growth should be a function of helping customers make progress in their lives instantly resonated with me.</BodyText>
        <BodyText></BodyText>
        {/*<Quote>
          <BodyText>Growth comes from a deep understanding of who your users are, and what's happening in their lives. Growth comes from putting their experience at the center of everything.</BodyText>
          <BodyText>Claire Suellentrop – ex Director of Marketing, Calendly</BodyText>
        </Quote>*/}
        <BodyText>To me, onboarding is simply the process of ensuring people are successful by using a product. It's about the customer not your product.</BodyText>
        <BodyText>In reality though, onboarding is not as simple as one single feature or customer action. It’s the holistic experience that ensures as many customers as possible achieve their goals by using your product.</BodyText>
        <BodyText>Over the past 4 years I've led both growth and product teams at growing startups and have spent hours designing and optimized onboarding experiences for numerous <StyledIntLink to="/about">B2B SaaS companies</StyledIntLink>. My goal is to make this a comprehensive guide for SaaS companies trying to grow revenue sustainably without spending more money on acquisition.</BodyText>
        <BodyText>If there’s something you’d love to see covered in the guide, please send an email and let me know: stuart [at] stuartbalcombe.com. You can also have me help you with your own onboarding <StyledIntLink to="/onboarding-audit">here</StyledIntLink>.</BodyText>
          
        <Card>
          <SubHead>Want to hear about new chapters?</SubHead>
          <SmallHeading>When you sign up you'll get:</SmallHeading>
          <List>
            <li>- New chapters straight to your inbox.</li>
            <li>- Occasional teardowns and case studies.</li>
          </List>
          <NewsletterForm location={this.props.location.pathname} />
        </Card>
        </ContainerSmall>
      </Layout>
    )
  }
}

export default Intro;