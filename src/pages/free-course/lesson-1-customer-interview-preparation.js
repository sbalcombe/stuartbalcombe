import React from "react"
import SEO from './../../components/SEO'
import Layout from './../../components/Layout'
import Link from "gatsby-link"
import styled from 'react-emotion'

const Headline = styled.h1`
  ${tw`text-4xl text-grey-darkest leading-normal font-serif text-center font-normal mb-4 font-bold`};
`

const Subheading = styled.p`
  ${tw`text-xl font-serif font-medium text-grey-darkest text-center leading-normal mb-0`};
`
const SectionHeading = styled.h3`
  ${tw`text-3xl font-bold text-grey-darkest leading-normal font-serif mb-2`};
`
const CTA = styled.h3`
  ${tw`text-xl text-grey-darkest`}
`

const BodyText = styled.p`
  ${tw`font-mono text-base`};
`

const Container = styled.div`
  ${tw`container mx-auto`};
`

const ContainerSmall = styled.div`
  ${tw`max-w-md mx-auto`};
`

const Banner = styled.div`
  ${tw`p-16 bg-indigo-lightest text-3xl font-serif font-normal mb-16 rounded text-center`};
`

const Tweet = styled.img`
	${tw`md:w-3/4 shadow rounded`};
`

const List = styled.ul`
	${tw`list-reset`};
`

const NumList = styled.ol`
  
`

const Li = styled.li`
	${tw`font-medium mb-4`};
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

class CourseLessonOne extends React.Component {
  render() {
    return (
    	<Layout>
	        <SEO title="How to prepare for customer interviews" description="In today’s lesson, you’ll learn why interviews provide the best insights to inform product decisions, identify your participants, and schedule your first interview." />
	        <Container>
            <Banner>
              <Headline>Module 1: Customer Interview Preparation</Headline>
              <Subheading>In today’s lesson, you’ll learn why interviews provide the best insights to inform product decisions, identify your participants, and schedule your first interview.</Subheading>
            </Banner>
          </Container>

          <ContainerSmall>
            <BodyText>If you’re building a product or business, you’re likely familiar with the idea of building features, but the truth is your customers care far more about your products ability to help them make progress in their lives than any feature you could build.</BodyText>
            <BodyText>To build products customers love we need to uncover their desired outcome or in other words the Job to be Done they are hiring our product to do.</BodyText>
            <BodyText>The solution our customers ultimately hire for their job to be done will be the one that helps them achieve their desired outcome cheaper, faster or more efficiently than their current status quo.</BodyText>
            <BodyText>This <StyledLink href="https://www.youtube.com/watch?time_continue=16&v=s9nbTB33hbg" target="_blank" rel="noreferrer noopener">video</StyledLink> by Harvard professor Clay Christenson illustrates why understanding the specific outcome a customer is trying to achieve is critical for building the right product for their context rather than just their demographic persona.</BodyText>
            <BodyText>Here's an example of a job to be done I have in my own life:</BodyText>
            <BodyText><strong>When I</strong> want to talk to my customers <strong>I need</strong> a way to schedule meetings fast, without wasting time going back and forth via email <strong>so I can</strong> spend my time talking to customers not scheduling meetings.</BodyText>
            <BodyText><strong>It's important to note that the Job to be Done is product agnostic.</strong></BodyText>
            <BodyText>I don't need a better calendar or scheduling software I need a better way to achieve my desired outcome (talking to customers).</BodyText>
            <BodyText>The most effective customer interviews are focused entirely on the <strong>needs</strong>, <strong>motivations</strong>, and <strong>behaviors</strong> of your customer (or prospective customer) NOT your product or idea.</BodyText>
            <BodyText>The problem is the vast majority of founders skip this critical customer research step because they believe they have enough information to “know” their solution is right.</BodyText>
            <BodyText>Unfortunately, <strong>the most common cause of startup failure (42%) is a lack of market need for the product.</strong></BodyText>
            <BodyText><em>That won’t be you.</em></BodyText>
            <BodyText>Effective customer interviews are your superpower to avoid spending weeks of work and thousands of dollars building the wrong product.</BodyText>
            <BodyText>Let’s get started.</BodyText>
            <SectionHeading>Step 1. Identify your audience</SectionHeading>
            <BodyText>Before you can start scheduling your interviews we need to identify who we would like to talk to. Your target audience will vary depending on whether or not you have an existing customer base or contact list. Here are a few of my favorite places to find participants.</BodyText>
            <BodyText><strong>Personal Network:</strong> The chances are you know some people or can ask for introductions to people who fit your target profile who you can talk to about their current needs and behaviors.</BodyText>
            <BodyText><strong>Online Communities:</strong> Niche communities like Slack, Facebook Groups, LinkedIn, Twitter are common watering holes to learn about customer pains where they are already being discussed. A quick Google, or Facebook search for: “your target audience” + “community” will give you a good starting point.</BodyText>
            <BodyText><strong>BuiltWith: </strong><StyledLink href="https://builtwith.com/" target="_blank" rel="noreferrer noopener">This site</StyledLink> provides a quick way to get a list of companies using competitor products. Remember the goal is not to start selling these people on your idea but to learn about how and why they hired their current solution to a problem.</BodyText>
            <SectionHeading>Step 2. Schedule your customer interviews</SectionHeading>
            <BodyText>Once you have a list of potential interview candidates it's time to reach out and start scheduling interviews. The number of interviews you need to do to make a decision should be correlated to how risky/expensive an incorrect decision would be. It's also important to think of customer interviews as an ongoing activity rather than a one and done investment you should only make at the start of a big project.</BodyText>
            <BodyText>I've included email outreach templates to take the stress out of sending your initial invitations. Here are 3 additional tips to make scheduling interviews easier.</BodyText>
            <NumList>
              <Li>Keep your emails short and personal. Try to position yourself as a partner who's looking to understand and address a real business problem vs selling a solution.</Li>
              <Li>Use a scheduling tool like <StyledLink href="https://www.calendly.com" target="_blank" rel="noreferrer noopener">Calendly</StyledLink> to simplify the process of booking an interview.</Li>
              <Li>Send a meeting invitation that includes a conference link (video or in-person interviews are the best) but be sure to ask for a phone number as a fallback.</Li>
            </NumList>
            <SectionHeading>Next Steps</SectionHeading>
            <BodyText>Download <StyledLink href="https://docs.google.com/document/d/10Z5RbxlaT1SVAq97BltzzmIeWIUiMf9A1XRBdcqYjMg/edit?usp=sharing" target="_blank" rel="noreferrer noopener">this outreach template</StyledLink> and use it to identify and contact your interview candidates. I want to challenge you to book ONE interview before the end of the week.</BodyText>
            <BodyText>In your next lesson, you'll learn exactly what questions to ask and how to facilitate an insight-rich customer interview to discover our customer's Job to be Done.</BodyText>
         </ContainerSmall>
      </Layout>
    )
  }
}

export default CourseLessonOne;