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

class CourseLessonThree extends React.Component {
  render() {
    return (
    	<Layout>
	        <SEO title="How to extract insights from customer interviews" description="In today’s lesson, you'll learn how to extract golden nuggets of insight from the interview you’ve recorded and understand how to apply them in your business." />
	        <Container>
            <Banner>
              <Headline>Module 3: Extracting Customer Insights</Headline>
              <Subheading>In today’s lesson, you'll learn how to extract golden nuggets of insight from the interview you’ve recorded and understand how to apply them in your business.</Subheading>
            </Banner>
          </Container>

          <ContainerSmall>
            <BodyText>At this point you might have completed your first customer interview and be wondering what to do next. (Don’t worry if you haven’t yet, this module will be here waiting when you’re ready)</BodyText>
            <BodyText>To drive drive business value insights from our interviews, we need to organize and group our learnings so we can identify patterns and extract key quotes for ongoing use.</BodyText>
            <BodyText>Let’s dive in.</BodyText>

            <SectionHeading>Organizing your insights</SectionHeading>
            <BodyText>In the last module I recommended that you record any virtual interviews to allow you to focus on the conversation rather than taking comprehensive notes.</BodyText>
            <BodyText>My preferred next step is to transcribe those notes using a service like <StyledLink href="https://www.rev.com/" target="_blank" rel="noreferrer noopener">Rev</StyledLink> or <StyledLink href="https://sonix.ai/" target="_blank" rel="noreferrer noopener">Sonix</StyledLink>. You can simply upload your interview recording and get back a full transcription.</BodyText>
            <BodyText>While transcribing the call is optional I find it saves a lot of time when it comes to extracting and organizing insights from the interview using my <StyledLink href="https://docs.google.com/spreadsheets/d/1-cwoPnuJjgMEwVI5AAHrQ7yYtYCQE3qrIUmXKqxERJw" target="_blank" rel="noreferrer noopener">customer insights spreadsheet</StyledLink>.</BodyText>
            <BodyText>The spreadsheet contains 6 sections to help you breakdown your interviews into actionable snippets you can use to support your decisions or use directly in your messaging.</BodyText>
            

            <SectionHeading>1. Struggling Moments</SectionHeading>
              <BodyText>These are the current or previous events and situations that your interviee describes that caused them to seek a new solution and change their status quo.</BodyText>
              <BodyText>Eg. When I’m trying to validate my product idea before writing code but I’m not sure what to ask to understand if customers need my solution.</BodyText>
            

            <SectionHeading>2. Driving Forces</SectionHeading> 
            <BodyText>These are the emotions that your interviewee either wants to feel or wants to avoid feeling by seeking to change their current status quo. The are gold mine for identifying why people might sign up and purchase your product.</BodyText> 
            <BodyText>Eg. I’ve built products in the past and it was frustrating to spend some much time building software only to launch to crickets.</BodyText>

            <SectionHeading>3. Existing Solutions</SectionHeading>
            <BodyText>How is your interviewee currently solving the problems they identified? Look for stories that describe existing workflows and mentions of specific events to distinguish their current behavior from how they would like to solve their problem.</BodyText>
            <BodyText>These existing solutions often won’t be software products. They may be manual processes happening via email or in an Excel sheet.</BodyText>
            <BodyText>Eg. I built a coming soon page with an email signup form.</BodyText>
            
            <SectionHeading>4. Alternative Solutions Considered</SectionHeading>
            <BodyText>Before your interviewee hired their current solution, what did their status quo look like? How did they go about looking for alternatives and what made them settle on their current option.</BodyText>
            <BodyText>Eg. Before I tried collecting email signups on a landing page I simply built software, released it and asked people to use it. I decided to build a landing page and collect emails for my next project because I got a new job and didn’t have time to spend writing a code before I knew if my project could be successful.</BodyText>

            <SectionHeading>5. Motivations</SectionHeading>
            <BodyText>What is your interview trying to accomplish by hiring a new solution? Do they know what the are trying to achieve but don’t know how to do it? Are they trying to avoid a behavior that currently frustrates them?</BodyText>
            <BodyText>eg. I want to better understand my customers needs and current behaviors.</BodyText>

            <SectionHeading>6. Desired Outcomes</SectionHeading>
            <BodyText>What is your interviewees ultimate goal? How do they believe their life will be better by solving this problem with a new solution.</BodyText>
            <BodyText>Eg. So I can launch a product people pay for, without building something they don’t want.</BodyText>

            <SectionHeading>Applying your insights</SectionHeading>
            <BodyText>Now our insights are organized and grouped let’s discuss how we can use them to move our business forward.</BodyText>
            <BodyText>The key concept here is:</BodyText>
            <BodyText><strong>Use their words.</strong></BodyText>
            <BodyText>We just spent the time listening to stories of our interviewees experience, the last thing we want to do is mask those golden nuggets of insight by paraphrasing. This is where transcribing your interviews really comes in handy.</BodyText>
            <BodyText>Here are 3 examples of how you can use your insights to make informed decisions.</BodyText>
            <SectionHeading>Prioritize a new investment.</SectionHeading>
            <BodyText>Now that you have collected evidence about the current behaviors and emotions of your customers and potential customers you can use it to support your product decisions. You can stop guessing about whether your idea will work and confidently justify that investing valuable resources to solve this problem is a good bet.</BodyText>
            <BodyText>Creating a product one-pager is an effective tool for succinctly communicating the evidence in support of solving a specific problem while ensuring you remain focused on addressing a real customer need.</BodyText>
            <BodyText>Eg. By conducting numerous interviews with Biostrap users it became clear that successful users formed consistent habits around when they used the product. This allowed me to confidently design an onboarding experience that encouraged this behavior in new customers signing up for the first time.</BodyText>
            <SectionHeading>Optimize an existing workflow.</SectionHeading>
            <BodyText>The specific insights gained from customer interviews can be used to improve your existing product experience to help guide users to achieve the goals they identified and overcome the barriers they have experienced while using other solutions. Often these insights will allow you to make small changes in that result in outsized value for customers because you are able to be precisely identify the choke points in the experience.</BodyText>
            <BodyText>Eg. At Sail I interviewed prospective and existing customers to understand their workflows for creating and sending client invoices. Armed with insights into their current behavior I was able to redesign the product experience to reduce the time it took to create and share a new invoice with clients by deprioritizing elements that were often left untouched.</BodyText>           
            <SectionHeading>Improve your marketing messaging.</SectionHeading>
            <BodyText>Customer interviews aren’t only useful for making effective product decisions. They can also be used to understanding the objections that customers may have to adopting your product, improve your positions relative to competitors and ensure your messaging remains grounded and personal.</BodyText>
            <BodyText>Directly quoting customers is a great way to a) increase social proof and b) use words that resonate with your target customers.</BodyText>
            <BodyText>Eg. Here’s a quote from a recent interview I did that can now be used directly quoted in a tweet or ad campaign: <em>“It's been a game changer for me. My doctor told me if I didn't improve my sleep I might die. Now I've never felt better.”</em></BodyText>
            <BodyText>I believe it’s important not to view customer interviews as a one time investment with a one off reward.</BodyText>
            <BodyText>The value of customer interviews compound as you build your library of insights to draw from. Equally, the cost of not doing customer interviews compounds and manifests itself in time and money wasted building the wrong product, poor sales conversions, and unnecessary feature bloat.</BodyText>
            <SectionHeading>Next Steps</SectionHeading>
            <BodyText>Make a copy of <StyledLink href="https://docs.google.com/spreadsheets/d/1-cwoPnuJjgMEwVI5AAHrQ7yYtYCQE3qrIUmXKqxERJw" target="_blank" rel="noreferrer noopener">Make a copy of this customer insights spreadsheet</StyledLink>  and use it to organize your customer insight data.</BodyText>
            <BodyText>I hope that this short course has shown that investing in continuous customer discovery doesn’t have to be an arduous or expensive process and the rewards speak for themselves.</BodyText>
            <BodyText>Remember. <strong>Companies that invest in on going customer research grow 2-3x faster than those that don’t.</strong></BodyText>
         </ContainerSmall>
      </Layout>
    )
  }
}

export default CourseLessonThree;