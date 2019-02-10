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
  ${tw`text-xl font-serif mb-3 pt-8 leading-normal`};
`

const Quote = styled.blockquote`
  ${tw`border-l-4 border-indigo pl-4 ml-0`};
`

const SmallHeading = styled.h5`
  ${tw`font-bold font-mono my-4 leading-normal`}
`

const BodyText = styled.p`
  ${tw`font-mono text-sm`};
`

const List = styled.ul`
  ${tw`list-reset ml-0 mb-0 text-sm`};
`

const Banner = styled.div`
  ${tw`py-16 bg-indigo-lightest text-3xl font-serif font-normal mb-16 rounded text-center`};
`
const BannerHeading = styled.div`
  ${tw`text-4xl font-serif font-black text-grey-darkest text-center leading-normal mb-2`};
`

const BannerSubheading = styled.div`
  ${tw`text-2xl font-serif font-black text-grey-dark text-center leading-normal`};
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
        <SEO title="Outcome Driven | Stuart Balcombe" description="A practical guide to building products customers love." />
      	<Banner>
      		<BannerHeading>Outcome Driven</BannerHeading>
          <BannerSubheading>A practical guide to building products customers love.</BannerSubheading>
      	</Banner>
      	<ContainerSmall>

        <Welcome>Intro</Welcome>

        <Row>
          <ThreeFifths>
            <BodyText>This guide will teach you how to approach early product development to ensure the product you launch drives successful outcomes for both your customers and your business.</BodyText>
            <BodyText>The guide is not intended to be a series of silver bullet growth hacks (I don’t believe they exist) but instead is focused on, long-term strategies that you can use to grow your business sustainably.</BodyText>
            <BodyText>This guide is an ongoing project that represents the synthesis of everything I've learned researching and building customer-focused products.</BodyText>
          </ThreeFifths>

          <TwoFifths>
            <List>
              <ContentListItem><strong>Planned Outline</strong></ContentListItem>
              <ContentListItem>- Why focus on outcomes</ContentListItem>
              <ContentListItem>- Understanding customers</ContentListItem>
              <ContentListItem>- Starting small</ContentListItem>
              <ContentListItem>- Product-led growth</ContentListItem>
              <ContentListItem>- Shipping to learn</ContentListItem>
              <ContentListItem>- Onboarding for success</ContentListItem>
              <ContentListItem>- Metrics that matter</ContentListItem>
              <ContentListItemLast>- Resource library</ContentListItemLast>
            </List>
          </TwoFifths>
        </Row>

        <SubHead>Who is this guide for?</SubHead>
        <BodyText>This guide is perfect for early-stage founders and their employees looking for a single resource that provides both principled frameworks and tactical support to help them delight their first customers and build an engine for learning.</BodyText>
        <BodyText>Additionally, this guide will provide useful information for product marketers, designers and engineers aiming to become more customer focused in their work. I recommend bookmarking this guide and reading chapters as they become relevant to your activities.</BodyText>

        <SubHead>Why I'm writing this guide</SubHead>
        <BodyText>I started my career as a "growth hacker" but in 2016 I attended a talk that changed my perspective on where growth really comes from. At the Boston leg of Intercom's World Tour, then Director of Growth Ben McRedmond shared his discomfort with the typical <StyledLink href="https://www.intercom.com/blog/videos/how-do-you-define-a-growth-team/" target="_blank">definition of growth</StyledLink>. The notion that growth should be a function of helping customers make progress in their lives instantly resonated with me.</BodyText>
        <BodyText></BodyText>
        {/*<Quote>
          <BodyText>Growth comes from a deep understanding of who your users are, and what's happening in their lives. Growth comes from putting their experience at the center of everything.</BodyText>
          <BodyText>Claire Suellentrop – ex Director of Marketing, Calendly</BodyText>
        </Quote>*/}
        <BodyText>To me, the most powerful way to think about building products is simply to ensure people are able to achieve successful outcomes by using your product. It's about the customer, not your product.</BodyText>
        <BodyText>In reality, though, building better products is not as simple as crafting one single feature or customer action. It’s the holistic experience that ensures as many customers as possible achieve their goals by using your product.</BodyText>
        <BodyText>Over the past 4 years I've led both growth and product teams at growing startups and have spent thousands of hours designing and building products experiences for numerous <StyledIntLink to="/about">B2B SaaS companies</StyledIntLink>. My goal is to make this a comprehensive guide for SaaS companies trying to achieve product/market fit, increase product usage and grow revenue.</BodyText>
        <BodyText>If there’s something you’d love to see covered in the guide, please send an email and let me know: stuart [at] stuartbalcombe.com.</BodyText>
          
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