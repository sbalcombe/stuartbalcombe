import React from 'react'
import { Link } from 'gatsby'

import styled from 'react-emotion'

const Container = styled.footer`
  ${tw`px-8 md:px-32 font-mono`};
`

const List = styled.ul`
  ${tw`list-reset ml-0`};
`

const FooterLink = styled.li`
  ${tw`inline-block mr-6 text-sm uppercase`}
`
const Footer = ({ siteTitle }) => (
  <Container>
    <List>
         <FooterLink><Link to='/about'>about</Link></FooterLink>
         <FooterLink><Link to='/a'>articles</Link></FooterLink>
         <FooterLink><Link to='/newsletter'>newsletter</Link></FooterLink>
    </List>
  </Container>
)

export default Footer;