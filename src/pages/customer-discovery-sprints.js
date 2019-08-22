import React from "react"
import SEO from './../components/SEO'
import Layout from './../components/Layout'
import Link from "gatsby-link"
import styled from 'react-emotion'
import NewsletterForm from './../components/NewsletterForm'
import ProductQuote from './../components/ProductQuote'
import bob from "../../content/assets/r_moore.jpg";
import ben from "../../content/assets/ben_kochavy.jpg";
import stuart from '../../content/assets/stuart-standing.png'

const Headline = styled.h1`
  ${tw`text-4xl text-grey-darkest leading-normal font-serif text-center font-normal mb-4 font-bold`};
`

const Subheading = styled.p`
  ${tw`text-xl font-serif font-medium text-grey-darkest text-center leading-normal mb-0 mt-2`};
`

const SectionHeading = styled.h3`
  ${tw`text-2xl font-bold text-grey-darkest leading-normal font-serif mb-2 mt-0 md:mt-12`};
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

const Row = styled.div`
  ${tw`flex flex-wrap -mx-2 py-8 md:py-12`};
`

const OneHalf = styled.div`
  ${tw`w-full md:w-1/2 px-2`};
`

const OneThird = styled.div`
  ${tw`w-full md:w-1/3 px-2`};
`

const TwoThirds = styled.div`
  ${tw`w-full md:w-2/3 px-2`};
`

const HeroImg = styled.img`
  ${tw`mb-0 hidden md:flex items-end`}
`

const Banner = styled.div`
  ${tw`p-8 md:p-16 bg-indigo-lightest text-3xl font-serif font-normal mb-16 rounded text-center`};
`

const CourseBanner = styled.div`
  ${tw`p-4 bg-indigo-lightest font-normal rounded`};
`

const CourseRow = styled.div`
  ${tw`flex flex-wrap -mx-2 items-center`};
`

const CourseHeading = styled.h3`
  ${tw`text-2xl font-bold text-grey-darkest leading-normal font-serif mb-0`};
`

const CourseBtn = styled(Link)`
  ${tw`float-right px-3 py-2 inline-block text-center mt-0 mb-2 rounded no-underline bg-indigo-light font-bold text-white hover:bg-indigo-dark hover:cursor-pointer`};
`

const Tweet = styled.img`
	${tw`md:w-3/4 shadow rounded`};
`

const List = styled.ul`
	${tw``};
`

const Li = styled.li`
	${tw`text-sm text-grey-dark`};
`

const Btn = styled.a`
  ${tw`px-3 py-2 inline-block mb-2 rounded no-underline bg-indigo-light font-bold text-white hover:bg-indigo-dark hover:cursor-pointer`};
`

const ProductHeadline = styled.h3`
  ${tw`text-2xl font-bold text-grey-darkest leading-normal text-center font-serif mb-0 mt-12`};
`

const ProductCard = styled.div`
  ${tw`hover:border-solid hover:border-2 rounded shadow p-4 hover:border-indigo hover:shadow-md mb-4 md:mb-0`};
`

const ProductHeading = styled.h2`
  ${tw`text-xl font-serif font-bold text-indigo leading-normal mb-2`};
`

const ProductSubHead = styled.h4`
  ${tw`text-base font-mono font-medium text-grey-darker leading-normal mb-2`};
`

const ProductBtn = styled.a`
  ${tw`px-3 py-2 block text-center mt-0 mb-2 rounded no-underline bg-indigo-light font-bold text-white hover:bg-indigo-dark hover:cursor-pointer`};
`

const StyledIntLink = styled(Link)`
  ${tw`no-underline text-indigo-light font-medium hover:underline`};
`

class DiscoverySprint extends React.Component {
  render() {
    return (
    	<Layout>
	        <SEO title="Customer Discovery Sprints: Done for your customer research and discovery." description="Learn about my done-for-you service to understand your customers and validate your riskiest product assumptions BEFORE you waste time and money building software no one uses." />
	        <Container>
            <Banner>
            <Headline>Better customer discovery, better products</Headline>
            <Subheading>Understand your customers and validate your riskiest product assumptions... BEFORE you waste time and money building software no one uses.</Subheading>
            </Banner>
          </Container>
          <ContainerSmall>
            <SectionHeading>Growing a software business is harder than ever.</SectionHeading>
            <BodyText>The cost of acquisition continues to rise and customers now have more choices than ever before. Building a product customers love to pay for requires a deeper understanding of their needs, behaviors and motivations to obtain product-market fit.</BodyText>
            <BodyText>But...</BodyText>
            <BodyText>You're run off your feet acquiring customers, managing your team and don't have the time to spend interviewing customers and designing incredible product experiences with your already overflowing todo list.</BodyText>

            <SectionHeading>Relying on your intuition (not evidence backed customer discovery) could be costing you $$$$$$ in revenue.</SectionHeading>
            <BodyText>...Yet if you're not able to invest in customer discovery BEFORE you start writing code that's the risk you run. Waiting to ship a new feature to production before testing that you're solving the right problem AND building the right solution with customers is the most expensive way to spend your precious time.</BodyText>
            <BodyText>Not only are you faced with the cost of building software customers don't use, but the opportunity cost of not building something they do want in the same time.</BodyText>
            
            <SectionHeading>An efficient and effective solution.</SectionHeading>
            <BodyText>Imagine looking forward to your next product release and knowing - not hoping or guessing but knowing that the time and money you invested in building new features will yield a positive return on your investment.</BodyText> 
            <BodyText>Building great software products requires intentional product discovery to identify your ideal customers, understand what problems they're trying to solve, and the product opportunities that could help them achieve their desired outcome.</BodyText>
            <BodyText>But how can you make that happen when, as the founder, you have so many hats to wear and hardly enough time? How do you research and interview your customers regularly when you need to complete or oversee a million tasks every single day?</BodyText>
            <BodyText>You don’t. Because I do.</BodyText>
          </ContainerSmall>
          <Container>
            <Row>
              <OneHalf>
                <ProductQuote
                  text="Stuart created a visual experience for a product that was still in the conceptual stage, so I could encounter any unexpected implementation issues and have something tangible to demo to customers. He delivered a rapid prototype that was great for idea validation."
                  img={bob}
                  name="Bob Moore"
                  title="CEO"
                  company="Crossbeam"
                >
                </ProductQuote>
              </OneHalf>
              <OneHalf>
                 <ProductQuote
                  text="There are very few people I know in the industry that have the unique combination of skills of user research focused product knowledge with the ability to execute on UI/UX."
                  img={ben}
                  name="Ben Kochavy"
                  title="Director of Growth"
                  company="Biostrap"
                >
                </ProductQuote>
              </OneHalf>
            </Row>
          </Container>
          <ContainerSmall>
            <SectionHeading>Free yourself to grow your business.</SectionHeading>
            <BodyText>When you work with me on a Customer Discovery Sprint, you don't just invest in high-quality research to discover new product opportunities and build a library of insights that compounds over time. You also buy your time back and become free to invest it into growing your company to the level it deserves.</BodyText>
            <BodyText>It’s time you got back to focusing your invaluable time and energy on what matters the most and what you do best: growing your business and empowering your team.</BodyText>
            
            <SectionHeading>A battle-tested process.</SectionHeading>
            <BodyText>I began doing intentional customer discovery more than 5 years ago and whole heartedly belive that the most defensible competitive advantage a business can have is a deeper understanding of it's customers.</BodyText>
            <BodyText>My battle-tested system, streamlined process and supporting resources have your customer discovery journey covered from start to finish. From customer interviews, to online discovery, rapid prototyping and user testing. I'll uncover the insights and provide the support you need to make better product decisions before you write a single line of code and waste your engineers valuable time.</BodyText>
            <BodyText>Imagine looking forward to your next product release and knowing - not hoping or guessing but knowing that the time and money you invested in building new features will yield a positive return on your investment.</BodyText>
         </ContainerSmall>
          <Container>
            <ProductHeadline>What I Offer</ProductHeadline>
            <Row>
              <OneHalf>
                <ProductCard>
                  <ProductHeading>Customer Interviews</ProductHeading>
                  <ProductSubHead>I research your customers and provide actionable insights:</ProductSubHead>
                  <List>
                    <Li>I interview ~10 of your customers to understand their needs, behaviors and motivations.</Li>
                    <Li>I identify where your target customers hangout online, and the words they use to describe their goals and challenges.</Li>
                    <Li>I organize, analyze and prioritize insights from online customer discovery and customer interviews.</Li>
                  </List>
                  <ProductBtn href="https://stuartbalcombe.paymentlink.me/customer-discovery-sprint-basic" target="_blank" rel="noreferrer noopener">Purchase - $2495</ProductBtn>
                </ProductCard>
              </OneHalf>
              <OneHalf>
                 <ProductCard>
                  <ProductHeading>Customer Discovery Sprints</ProductHeading>
                  <ProductSubHead>I research your customers, prototype, and test product hypothesis:</ProductSubHead>
                  <List>
                    <Li>I research and interview customers to understand what drives their behavior.</Li>
                    <Li>I organize, analyze and prioritize insights from online customer discovery and customer interviews.</Li>
                    <Li>I designing and test rapid prototypes without code to shorten feedback loops and learn faster.</Li>
                    <Li>I provide tools, templates, and frameworks to help your product team do more effective product discovery.</Li>
                  </List>
                  <ProductBtn href="https://stuartbalcombe.typeform.com/to/hJEaE7" target="_blank" rel="noreferrer noopener">Learn More</ProductBtn>
                </ProductCard>
              </OneHalf>
            </Row>
          </Container>
          <Container>
            <Row>
              <TwoThirds>
                <SectionHeading>Who do I talk to?</SectionHeading>
                <BodyText>I’m Stuart Balcombe, a product designer, and customer discovery nerd who's spent the past 5 years helping founders understand what makes their customers tick so they can make better product decisions.</BodyText>
                <BodyText>Ready to get started? We’ll schedule a time for us to talk about how customer discovery can change your product's growth trajectory.</BodyText>
                <Btn href="https://stuartbalcombe.typeform.com/to/hJEaE7" target="_blank" rel="noreferrer noopener">Let's talk</Btn>
              </TwoThirds>
             <OneThird>
                <HeroImg src={stuart} />
              </OneThird>
            </Row>
            <CourseBanner>
              <CourseRow>
                <OneHalf>
                  <CourseHeading>Want to learn how to get started with customer discovery yourself?</CourseHeading>
                </OneHalf>
                <OneHalf>
                  <CourseBtn to="/free-course">Get the Free Course</CourseBtn>
                </OneHalf>
              </CourseRow>
            </CourseBanner>
          </Container>
      </Layout>
    )
  }
}

export default DiscoverySprint;