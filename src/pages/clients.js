import React from "react"
import SEO from './../components/SEO'
import Layout from './../components/Layout'
import Link from "gatsby-link"
import headshot from "../../content/assets/stuart.jpg";
import mike from "../../content/assets/m_wilner.jpg";
import matt from "../../content/assets/m_fulton.jpg";
import bob from "../../content/assets/r_moore.jpg";
import ben from "../../content/assets/ben_kochavy.jpg";
import graham from "../../content/assets/g_mcconnell.jpg";
import styled from 'react-emotion'
import Quote from './../components/Quote'

const Headline = styled.h1`
  ${tw`text-3xl text-grey-darkest leading-normal font-serif font-normal mb-2 font-bold`};
`

const Container = styled.div`
  ${tw`container mx-auto`};
`
const BodyText = styled.p`
  ${tw`font-mono text-base text-grey-dark`};
`

const Row = styled.div`
	${tw`md:flex`}
`

const OneHalf = styled.div`
  ${tw`w-full md:w-1/2 px-2 mb-8 md:mb-0`};
`

class Clients extends React.Component {
  render() {
    return (
    	<Layout>
	        <SEO title="Stuart Balcombe" description="Helping people build better products by focusing on successful customer outcomes." img={headshot}/>
	        <Container>
	        	<Row>
			    	<OneHalf>
			    		<Headline>You're in good company</Headline>
			    		<BodyText>Join previous clients who've grown their business by understanding their customers and shipping value quickly.</BodyText>
			    	</OneHalf>
			    	<OneHalf>
			    			<Quote
			    				text="Stuart created a visual experience for a product that was still in the conceptual stage, so I could encounter any unexpected implementation issues and have something tangible to demo to customers. He was responsive and delivered a rapid prototype that was great for idea validation."
			    				img={bob}
			    				name="Bob Moore"
			    				title="CEO"
			    				company="Crossbeam"
			    			>
			    			</Quote>
			    	</OneHalf>
		    	</Row>
		    	<Row>
			    	<OneHalf>
			    		<Quote
		    				text="Working with Stuart is a pleasure — he is a thoughtful, proactive product leader with a breadth of skills positioning him to get his hands dirty. On the hands-dirty side, Stuart took charge of customer research, design, UX, and prototyping to great effect. As a leader, Stuart collaborated with engineering management to get buy-in and set scope, worked directly with individual engineers on implementation issues, and deftly coordinated across product and non-product stakeholders."
		    				img={matt}
		    				name="Matt Fulton"
		    				title="Software Engineer"
		    				company="Google"
		    			>
		    			</Quote>
			    	</OneHalf>
			    	<OneHalf>
			    			
			    			<Quote
			    				text="Stuart took the lead on our longer-term strategic roadmap and infused constant consideration for great user experience in terms of client onboarding and platform experience. He also brought extensive knowledge of products to save time and effort. Stuart is the hardest working, strategic product leader I've ever worked with."
			    				img={graham}
			    				name="Graham McConnell"
			    				title="CEO"
			    				company="Nth Round"
			    			>
			    			</Quote>
			    	</OneHalf>
		    	</Row>
		    	<Row>
			    	<OneHalf>
			    		
			    			<Quote
			    				text="Stuart is one of the most voracious learners I've ever met, and it makes him an incredible product person. He learns about, understands, and practices industry-leading product principles that span from product marketing to product management, to product design. His experience and consideration of all three disciplines make him a very effective full-stack product person. He also builds products without ego – he's ruthlessly focused on building a product that's ideal for the customer as quickly as possible. He focuses on starting small and iterating as quickly as possible by being in close contact with customers. If you want someone who will help you get to the right product as quickly as possible with as little wasted resources as possible, Stuart is your guy."
			    				img={mike}
			    				name="Mike Wilner"
			    				title="Startup Business Development"
			    				company="Amazon"
			    			>
			    			</Quote>
			    	</OneHalf>
			    	<OneHalf>
			    			<Quote
			    				text="There are very few people I know in the industry that have the unique combination of skills of user research focused product knowledge with the ability to execute on UI/UX."
			    				img={ben}
			    				name="Ben Kochavy"
			    				title="Director of Growth"
			    				company="Biostrap"
			    			>
			    			</Quote>
			    	</OneHalf>
		    	</Row>
	    	</Container>
    	</Layout>
    )
  }
}

export default Clients;