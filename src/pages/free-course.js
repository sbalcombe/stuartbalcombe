import React from "react"
import SEO from './../components/SEO'
import Layout from './../components/Layout'
import Link from "gatsby-link"
import styled from 'react-emotion'
import NewsletterForm from './../components/NewsletterForm'

import jmj from '../../content/assets/jmj_tweet.jpg'

const Headline = styled.h1`
  ${tw`text-4xl text-grey-darkest leading-normal font-serif text-center font-normal mb-4 font-bold`};
`

const Subheading = styled.p`
  ${tw`text-xl font-serif font-medium text-grey-darkest text-center leading-normal mb-0`};
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
  ${tw`py-16 bg-indigo-lightest text-3xl font-serif font-normal mb-16 rounded text-center`};
`

const Tweet = styled.img`
	${tw`md:w-3/4 shadow rounded`};
`

const List = styled.ul`
	${tw`list-reset`};
`

const Li = styled.li`
	${tw`font-medium`};
`

class FreeCourse extends React.Component {
  render() {
    return (
    	<Layout>
	        <SEO title="1-Hour Customer Interviews: 3 Free Lessons to Understand Customers" description="Effective customer interviews can help you grow your business 2-3x faster. Here's how you unlock that growth for yourself." />
	        <Container>
	        	<Banner>
	        		<Headline>1-Hour Customer Interviews</Headline>
	        		<Subheading>Businesses that invest in ongoing customer research grow 2-3x faster.</Subheading>
	        		<Subheading>Now you can learn how to get the insights you need to grow yours.</Subheading>
	        	</Banner>
	       	</Container>
	       	<ContainerSmall>
	       		<BodyText>Over the past 3 years, I've conducted hundreds of customer interviews for companies and clients I've worked with.</BodyText>
	       		<BodyText>They started as a way to understand how customers used our product and how we could improve their experience, but the impact of effective customer interviews is more far reaching than I ever could have imagined. Insights gathered during 1-1 conversations with customers can:</BodyText> 
	       		<List>
	       			<Li>...save you wasting time building a feature no one uses.</Li>
	       			<Li>...unlock the key to rapid product adoption.</Li>
	       			<Li>...drive your next killer marketing campaign.</Li> 
	       			<Li>...become your highest converting landing page copy.</Li>
	       			<Li>...and so much more.</Li>
	       		</List>
	       		<BodyText>The data speaks for itself, successful businesses are 242% more likely to conduct customer research at least once every quarter, and investing in ongoing customer research helps businesses grow 2-3x faster.</BodyText>
	       		<Tweet src={jmj} />
	       		<BodyText><strong>Most SaaS businesses never get to 100 paying customers,</strong> especially not in their first year, I think a big reason is lack of clarity around who the target customer is and what is most valuable to them.</BodyText>
	       		<BodyText>Every time I conduct customer interviews I've been refining my process for unlocking the key insights that drive great product decisions and marketing campaigns. Now I'm releasing an <strong>in-depth series walking you step-by-step through how you can conduct effective customer interviews yourself.</strong></BodyText>
	       		<BodyText>I’m going to cover everything you need to know:</BodyText>
	       		<ul>
					<Li>Identifying your target audience.</Li>
					<Li>Planning and scheduling your first interview.</Li>
					<Li>Asking the right questions.</Li>
					<Li>Organizing and leveraging insights.</Li>
					<Li>And much more…</Li>
				</ul>

	       		<BodyText>There is a lot to cover so I’ll be breaking this up into easy to follow modules you can complete in just 20 minutes each day.</BodyText>
	       		<CTA>Get the first lesson by signing up here:</CTA>
	       		<NewsletterForm location={this.props.location.pathname} group="group[4843][8]" groupVal="8" />
	       		<BodyText>Whether you’re building your first business or your fifth, <strong>the more deeply you understand your customers the more successful you’ll be.</strong> Anyone who wants to build a product customers love to pay for will find something valuable in this series.</BodyText>
	       		<BodyText>So if you do want to get the whole course, <strong>be sure you sign up above</strong> to be added to the special “1-Hour Customer Interviews Email List!”</BodyText>
	       	</ContainerSmall>
	    </Layout>
	)
  }
}

export default FreeCourse;