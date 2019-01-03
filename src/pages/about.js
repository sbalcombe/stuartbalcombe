import React from "react"
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Link from "gatsby-link";
import styled from 'react-emotion'

const ContainerSmall = styled.div`
  ${tw`max-w-md mx-auto`};
`

const Welcome = styled.h1`
  ${tw`text-3xl font-serif font-bold my-8 text-indigo-light`};
`

const List = styled.ul`
  ${tw`list-reset`};
`

const SubHead = styled.h3`
  ${tw`text-xl font-serif mb-3 mt-12 text-indigo-light`};
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const InternalLink = styled(Link)`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const Duration = styled.div`
  ${tw`no-underline text-grey text-sm`};
`

const Accent = styled.span`
  ${tw`font-bold text-grey-darker`};
`

class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Hi, I'm Stuart Balcombe" description="I help software companies increase revenue and drive sustainable growth, without spending more on customer acquisition." />
        <ContainerSmall>
          <Welcome>My Story</Welcome>
          <p>I’ve spent the past 4 years helping companies build and grow software products. My work is centered around 3 core values:</p>
          <List>
            <li>- Deeply understanding customers.</li>
            <li>- Starting small and iterating quickly.</li>
            <li>- Building sustainable systems vs short term solutions.</li>
          </List>

          <SubHead>Right now</SubHead>
          <p>Today, I lead product at <StyledLink href="https://www.consultdirect.co" target="_blank">ConsultDirect</StyledLink> and help build tools and systems for the future of work.</p>
          <p>I also focus my independent work on teaching and advising companies about how to improve their product onboarding experiences.</p>
          <p>In 2018, I launched <StyledLink href="https://paymentlink.me" target="_blank">PaymentLink</StyledLink>, a simple way for those providing client services to onboard new clients and get paid for their recurring work. This product originally started as part of my <InternalLink to="/a/my-web-app-challenge">Web App Challenge</InternalLink>.</p>
          
          <SubHead>Previously</SubHead>
          <p>I’ve been working with SaaS companies since 2014 in both growth marketing and product management roles.</p>
          <List>
          <li>
          <Duration>May 2018 - Current</Duration>
          <Accent>VP Product Management</Accent>
          <div>ConsultDirect</div>
          </li>
          <li>
          <Duration>April 2017 - December 2017</Duration>
          <Accent>Director of Product</Accent>
          <div>Sail</div>
          </li>
          <li>
          <Duration>August 2016 - April 2017</Duration>
          <Accent>Director of Growth</Accent>
          <div>Compass</div>
          </li>
          <li>
          <Duration>December 2014 - June 2016</Duration>
          <Accent>Growth Marketer</Accent>
          <div>RevUp (previously Betaspring)</div>
          </li>
          </List>
          <SubHead>Get in touch</SubHead>
          <p>Say hello on <StyledLink href="https://twitter.com/stubalcombe" target="_blank">Twitter</StyledLink>.</p>

          <p>Want to email me? Reach me at stuart [at] stuartbalcombe.com.</p>
        </ContainerSmall>
      </Layout>
    )
  }
}

export default About;