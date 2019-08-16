import React from "react"
import SEO from './../components/SEO'
import Layout from './../components/Layout'
import Link from "gatsby-link";
import styled from 'react-emotion'
import headshot from "../../content/assets/stuart.jpg";

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
        <SEO title="Hi, I'm Stuart Balcombe" description="I help people build better products by focusing on successful customer outcomes." img={headshot}/>
        <ContainerSmall>
          <Welcome>My Story</Welcome>
          <p>I’ve spent the past 4 years helping early-stage companies build and grow software products. My work is centered around 3 core values:</p>
          <List>
            <li>- Deeply understanding customers.</li>
            <li>- Starting small and iterating quickly.</li>
            <li>- Measuring success by outcomes not outputs.</li>
          </List>

          <SubHead>Right now</SubHead>
          <p>As of August 2019, I'm an independent consultant advising early-stage software companies on product strategy and building customer focused products.</p>
          <p>In 2018, I launched <StyledLink href="https://paymentlink.me" target="_blank">PaymentLink</StyledLink>, a simple way for busy service providers to onboard new clients and get paid for their recurring work without code. This product originally started as part of my <InternalLink to="/a/my-web-app-challenge">Web App Challenge</InternalLink>.</p>
          
          <SubHead>Previously</SubHead>
          <p>I’ve been working with SaaS companies since 2014 in both growth marketing and product management roles.</p>
          <List>
          <li>
          <Duration>May 2018 - August 2019</Duration>
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
          <SubHead>Recent Press</SubHead>
          <p></p>
          <List>
            <li>
              <p><StyledLink href="https://appliedsynergygroup.com/stuart-balcombe-the-customer-designed-product/" target="_blank" rel="noreferrer nofollow">Building customer focused products</StyledLink><br /><Duration>Guest on Hub of Success podcast.</Duration></p>
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