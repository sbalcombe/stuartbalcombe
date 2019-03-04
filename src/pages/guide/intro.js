import React from "react"
import SEO from './../../components/SEO'
import Layout from './../../components/Layout'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import NewsletterForm from './../../components/NewsletterForm'
import guide from '../../../content/assets/onboarding.svg'
import bannerMeta from "../../../content/assets/guide-banner.jpg";



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
        <SEO title="Outcome Driven: The Book" description="A practical guide to building products customers love." img={bannerMeta} />
      	<Banner>
      		<BannerHeading>Outcome Driven</BannerHeading>
          <BannerSubheading>A practical guide to building products customers love.</BannerSubheading>
      	</Banner>
      	<ContainerSmall>

        <Welcome>Intro</Welcome>

        <Row>
          <ThreeFifths>
            <BodyText>The goal of every product you launch should be to make your customer and ultimately your business successful. This guide will teach you how to approach early product development and do exactly that.</BodyText>
            <BodyText>The guide is not focused on silver-bullet "growth hacks" because they don't exist. Instead, these strategies will help grow your business in a long-term, sustainable way.</BodyText>
            <BodyText>This project that shares the synthesis of everything I've learned researching and building products that solve real problems for real people.</BodyText>
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
        <BodyText>If you're looking for a single resource of frameworks and support that help delight your first customers, this is for you. Also, this guide will help product marketers, designers, and engineers focus more on solving for their customer.</BodyText>
        <BodyText>Most people will find it helpful to bookmark this guide and come back to it as different chapters become relevant to their work.</BodyText>

        <SubHead>Why I'm writing this guide</SubHead>
        <BodyText>I started my career as a "growth hacker". In 2016, though, one night changed the entire way I viewed my career. At the Intercom World Tour, then-Director of Growth Ben McRedmond shared his concern with the popular <StyledLink href="https://www.intercom.com/blog/videos/how-do-you-define-a-growth-team/" target="_blank">definition of growth</StyledLink>. To him, growth should be a function of helping customers make progress in their lives. I still think about that line, even years later.</BodyText>
        <BodyText>The most powerful way to think about building products is to make sure that above all else, people are successful using what you built. Solve for the customer, not your product. In reality, though, great products don't come down to one feature or customer action. You need a holistic experience that solves for your users to be successful in 2019 and beyond.</BodyText>
        <BodyText>Over the past four years, I've led both growth and product teams at scaling startups. Along the way, I've spent thousands of hours designing and building product experiences at many <StyledIntLink to="/about">B2B SaaS companies</StyledIntLink>. My goal here is to distill that experience into one guide to help SaaS companies achieve product/market fit, increase usage, and grow revenue.</BodyText>
        <BodyText>If there’s something you want to see covered in the guide, please email and let me know: stuart [at] stuartbalcombe.com. Until then, enjoy this guide.</BodyText>
          
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