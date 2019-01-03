
import React from 'react'
import { Link } from 'gatsby'
import avatar from './../images/stuart.jpg'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`px-8 md:px-32`};
`

const Nav = styled.div `
  ${tw`border-b border-grey-lighter border-solid border-l-0 border-r-0 border-t-0 py-4 flex items-center justify-between flex-wrap`};
`

const NavImg = styled.img`
  ${tw`w-12 rounded mb-0`};
`

const NavList = styled.ul`
  ${tw`ml-auto list-reset flex mb-0 h-full`};
`

const NavItem = styled.li`
  ${tw`ml-6 mb-0 font-mono`};
`

const StyledGatsbyLink = styled(Link)`
  ${tw`text-indigo no-underline hover:underline hover:font-bold`};
`

const StyledLogoLink = styled(Link)`
  ${tw`no-underline`};
`

const Header = ({ siteTitle }) => (
  <Container>
    <Nav>
      <StyledLogoLink to="/">
        <NavImg src={avatar} alt="Profile image of Stuart Balcombe"></NavImg>
      </StyledLogoLink>
      <NavList>
      	<NavItem><StyledGatsbyLink to="/a">Blog</StyledGatsbyLink></NavItem>
      	<NavItem><StyledGatsbyLink to="/about">About</StyledGatsbyLink></NavItem>
      </NavList>
    </Nav>
  </Container>
)

export default Header