import React from "react"
import SEO from '../../components/SEO'
import Layout from '../../components/layout'
import styled from 'react-emotion'

const Banner = styled.div`
  ${tw`p-16 bg-indigo-lightest text-3xl font-serif font-normal mb-8`};
`
const BannerHeading = styled.div`
  ${tw`text-4xl font-serif font-black text-grey-darkest`};
`

const Welcome = styled.h1`
  ${tw`text-3xl font-serif font-normal`};
`

const ContainerSmall = styled.div`
  ${tw`max-w-md mx-auto`};
`

class Intro extends React.Component {
  render() {
    return (
      <Layout>
      	<Banner>
      		<BannerHeading>Onboarding Field Guide</BannerHeading>
      	</Banner>
      	<ContainerSmall>
        <Welcome>Intro</Welcome>
        </ContainerSmall>
      </Layout>
    )
  }
}

export default Intro;