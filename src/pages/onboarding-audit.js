import React from "react"
import Link from "gatsby-link"
import styled from 'react-emotion'
import Layout from './../components/Layout'
import SEO from './../components/SEO'

const StyledButton = styled.a`
  ${tw`px-4 py-3 inline-block mb-2 rounded no-underline bg-indigo-light text-white hover:bg-indigo-dark hover:cursor-pointer`};
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const SmallContainer = styled.div`
  ${tw`w-full md:w-2/3 px-2 mb-8 md:mb-0 mx-auto`};
`

const Welcome = styled.h1`
  ${tw`text-3xl font-serif mb-3`};
`

const SubHead = styled.h3`
  ${tw`text-xl font-serif mb-8 leading-normal`};
`

class OnboardingAudit extends React.Component {
  render() {
  	return (
      <Layout>
  			<SEO title="Stuart Balcombe | Onboarding optimization for Startups" description='Increase revenue and drive sustainable growth, without spending more on customer acquisition.'/>
  			<SmallContainer>
        <Welcome>Onboarding Success Audit</Welcome>
  			<SubHead>Increase revenue and drive sustainable growth, without spending more on customer acquisition.</SubHead>
  			<p>Are you spending time and money driving traffic to your marketing site but don’t have a clear process for turning signups into engaged users? Are you frustrated by new users signing up for a trial but churning before they actually pay you?</p>
  			<p>If so, you’re not alone.</p>
  			<p>The problem is most SaaS apps lose 95% of their new users after 90 days. When your users don’t understand the value of your product during onboarding, your first impression is complete, and they typically move on to trying something else.</p>
  			<p>Imagine how much increasing activation or reducing churn by just 1% could move the needle for your business.</p>
  			<p><strong>You need a process for guiding customers from signup to success.</strong></p>
  			<p>Here’s what that means:</p>
  			<ol>
  				<li>You need to understand your user’s goals and the barriers they encounter when trying to achieve them.</li>
  				<li>You need a clear picture of your current onboarding experience from your user’s point of view.</li>
  				<li>You need to educate your new signups about how the service you provide will improve their lives.</li>
  				<li>You also need to make sure your users have an amazing first time-experience that makes it as easy as possible to get from where they are to where they want to be.</li>
  				<li>You need to get trial users active and engaged with your product to ensure your product is sticky enough for them to take out their credit card and actually pay you.</li>
  				<li>You also need to engage your users over time to ensure your customers remain active and your product is too indispensable to purge in the annual expenses audit.</li>
  				<li>You need to continuously iterate on your onboarding process as you add new features or target new market segments.</li>
  			</ol>

  			<p>You might already know all this but the problem is you’re busy wearing too many other hats to really dive deep into improving your onboarding experience. You also probably can’t afford a full-time hire (with benefits) to work exclusively on onboarding.</p>
  			<h4>That’s where I can help.</h4>
  			<p>During an Onboarding Success Audit, I’ll review your existing onboarding experience and provide a fresh research backed perspective on what’s working and what’s not. You’ll also get an actionable game plan for improvement.</p>
  			<p><strong>The onboarding audit is a good fit for you if:</strong></p>
  			<ul>
  				<li>You already have paying customers.</li>
  				<li>You already convert website traffic into signups but think you can do better.</li>
  				<li>You know onboarding is important but don’t have anyone who owns it on your team.</li>
  				<li>Your churn rates are higher than you’d like and you can’t figure out why.</li>
  				<li>You appreciate honest, objective feedback on your product experience.</li>
  			</ul>
  			<h4>Here’s how it works:</h4>
  			<ul>
  				<li>You provide some details about your company and the onboarding challenges you're experiencing and we'll hop on a quick 30-minute call to make sure I can really add value for you (I wouldn't have it any other way).</li>
  				<li>Once we decide this is a good fit, you’ll give me access to your analytics data (GA, Mixpanel, Intercom etc) and I’ll familiarize myself with your customers. I’ll review the data to identify bottlenecks and interview at least 10 of your customers to discover their goals and the barriers holding them back. I'll also interview several of your customers to understand their motivations and goals for using your product.</li>
  				<li>Once I’ve researched your customers, I’ll signup for your product myself and create a complete journey map of my experience from landing pages to in-app experience and email communication.</li>
  				<li>Next, I’ll write up a comprehensive report of my findings. You’ll get at multiple “quick wins” that you can implement immediately along with a detailed plan for long-term testing and optimization.</li>
  				<li>Finally, once you’re reviewed my report we'll have a 60-minute follow up call to go over your questions, and add any final thoughts. If you're happy with my recommendations, but need help implementing them, we can discuss those details as well.</li>
  			</ul>
  			<p><strong>Who am I to tell you about onboarding and user experience?</strong></p>
  			<p>I’ve spent the past 4 years helping build and grow software products. I led the growth team at a startup accelerator and have designed and optimized onboarding for numerous B2B SaaS companies.</p>
  			<p>I’ve also spent hundreds of hours interviewing customers and championing onboarding to internal stakeholders as a product manager. This diverse experience positions me perfectly to understand your customers and improve the metrics that matter to grow your business.</p>
			<hr />
			<p>The Onboarding Audit currently costs $2495. You’ll get your completed report within 2 weeks of our initial consultation. Click below to apply today.</p>
  			<StyledButton href='https://stuartbalcombe.typeform.com/to/hENgsy'>Lets do it!</StyledButton>

  			<p><small>I'd love to hear from you. <StyledLink href="mailto:stuart@stuartbalcombe.com" target="_blank">Shoot me an email</StyledLink> and I'll get back to you as soon as I can.</small></p>
  		</SmallContainer>
      </Layout>
  	)
  }
}

export default OnboardingAudit;