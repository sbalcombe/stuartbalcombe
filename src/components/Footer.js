import React from 'react'
import { Link } from 'gatsby'

import styled from 'react-emotion'

const Foot = styled.div `
  ${tw`border-t border-grey-lighter border-solid border-l-0 border-r-0 border-b-0 py-4 flex items-center justify-between flex-wrap`};
`

const Container = styled.footer`
  ${tw`px-8 md:px-32 font-mono`};
`

const List = styled.ul`
  ${tw`list-reset mx-auto md:mx-0 md:ml-auto`};
`

const FooterLink = styled.li`
  ${tw`inline-block no-underline mr-6 text-sm hover:underline hover:font-bold`}
`

const StyledGatsbyLink = styled(Link)`
  ${tw`text-indigo no-underline hover:underline hover:font-bold`};
`

const StyledExternalLink = styled.a`
  ${tw`text-indigo no-underline hover:underline hover:font-bold`};
`

const Footer = ({ siteTitle }) => (
 
    <Container>
     <Foot>
      <List>
           <FooterLink><StyledGatsbyLink to='/about'>About</StyledGatsbyLink></FooterLink>
           <FooterLink><StyledGatsbyLink to='/newsletter'>Newsletter</StyledGatsbyLink></FooterLink>
           <FooterLink><StyledExternalLink href="https://twitter.com/stubalcombe" target="_blank" rel="noreferrer noopener">Twitter</StyledExternalLink></FooterLink>
      </List>
       </Foot>
    </Container>
 
)

export default Footer;