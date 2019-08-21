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

class CourseLessonTwo extends React.Component {
  render() {
    return (
    	<Layout>
	        <SEO title="How to ask the right questions in customer interviews." description="In today’s lesson, you’ll learn the questions you should ask to get the in-depth customer insights you need to make informed product decisions." />
	        <Container>
            <Banner>
              <Headline>Module 2: Customer Interview Questions</Headline>
              <Subheading>In today’s lesson, you’ll learn the questions you should ask to get the in-depth customer insights you need to make informed product decisions.</Subheading>
            </Banner>
          </Container>

          <ContainerSmall>
            <BodyText>In the last module, you learned how to identified interview candidates, get in touch and schedule a time to chat. But what should you ask in an interview?</BodyText>
            <BodyText>Remember our goal is to understand the <strong>needs</strong>, <strong>motivations</strong>, and <strong>behaviors</strong> of our interviewees in their buying journey.</BodyText>
            <BodyText>But, the prospect of having a conversation about someone’s problems can be difficult. Maybe you feel awkward asking deep questions about someone else’s business, or maybe you’re worried you’ll make the interviewee feel awkward.</BodyText>
            <BodyText>Worst of all maybe you’re worried that you’ll waste everybody's time by scheduling and conducting an interview and still not getting the insight you need to move your business forward!</BodyText>
            <BodyText>To help get you over the hump and start gathering invaluable insights. I’ve created a <StyledLink href="https://docs.google.com/document/d/1Kb9mvaHWu7v1EuzZYOrwn7dh6GS1dNWMGrsuqNTaoHE/edit?usp=sharing" target="_blank" rel="noreferrer noopener">cheat sheet</StyledLink> from my experience doing interviews to make your customer interview experience (actually) fun and not awkward at all.</BodyText>
            <BodyText>Here’s a sneak peek from the cheat sheet: <strong>3 of my favorite questions to ask during interviews.</strong></BodyText>
            <BodyText>- Can you share an example of a time you felt particularly stressed out or frustrated trying to achieve [DESIRED OUTCOME]?</BodyText>
            <BodyText>- What happened that led you to start looking for something like [PRODUCT/SERVICE]?</BodyText>
            <BodyText>- What can you do with [SOLUTION], that you couldn’t do before?</BodyText>
            <BodyText>Each of these questions is will help you dig into the underlying motivation and behavior behind <strong>WHY</strong> people buy and use a product.</BodyText>

            <SectionHeading>3 Customer Interview Secrets</SectionHeading>
            <NumList>
              <Li><strong>Focus on real events.</strong> In my experience, the best way to eliminate your own bias and to prevent people from telling you what they THINK you want to hear is to ask about very specific events and experiences. Let the conversation guide your follow-ups and remain curious about the underlying why behind each answer.</Li>
              <Li><strong>Don’t worry about asking all your questions.</strong> The best interviews I’ve conducted focus on the stories and the real experiences of the interviewee. It’s perfectly okay if the first portion of an interview doesn’t seem related to your questions if it helps break the ice and create an open conversation. We’ll pull out the critical insights in the next module.</Li>
              <Li><strong>Record everything.</strong> To allow you to focus on the conversation and not worry about missing a crucial insight, I’d recommend recording your interviews using a tool like <StyledLink href="https://zoom.us/" target="_blank" rel="noreferrer noopener">Zoom</StyledLink> or <StyledLink href="https://www.uberconference.com/" target="_blank" rel="noreferrer noopener">Uberconference</StyledLink> if you’re doing video interviews or <StyledLink href="https://www.rev.com/callrecorder" target="_blank" rel="noreferrer noopener">Call Recorder</StyledLink> for phone interviews to record these calls for free if you're doing them virtually.</Li>
            </NumList>
            <SectionHeading>3 Common Mistakes to Avoid</SectionHeading>
             <NumList>
              <Li><strong>Introducing your own bias.</strong> It's very important to remember that each interview is about the interviewee and their experience rather than you or your product. Avoid introducing visual cues or asking leading questions that could lead your witness. Stay focused on discovery rather than feedback.</Li>
              <Li><strong>Making assumptions.</strong> Sometimes you will hear things that at face value might seem to validate a hypothesis you already have. It's easy to just accept that and move on, but it's important to dig deeper for more evidence grounded in real behavior. For example,  if you ask "Do you think you drink enough water?". You might hear a simple "yes", but when you ask "How many times did you drink water today?" you might get a different answer that you can dig into to understand why.</Li>
              <Li><strong>Being too scripted.</strong> This isn't a job interview or a colonoscopy. Think of your role as being an investigative journalist following the story as it twists and turns. Ask your questions as they make sense in the conversation and use the cheat sheet as a reference guide rather than a rigid script.</Li>
            </NumList>
            <SectionHeading>Next Steps</SectionHeading>
            <BodyText>Make a copy of <StyledLink href="https://docs.google.com/document/d/1Kb9mvaHWu7v1EuzZYOrwn7dh6GS1dNWMGrsuqNTaoHE/edit?usp=sharing" target="_blank" rel="noreferrer noopener">this interview cheat sheet</StyledLink> and use it to conduct your first Jobs to be Done interview.</BodyText>
            <BodyText>In the next module, we’ll cover how to extract valuable nuggets of insight you can use to: improve your product, refine your positioning, or enhance your marketing campaigns.</BodyText>
         </ContainerSmall>
      </Layout>
    )
  }
}

export default CourseLessonTwo;