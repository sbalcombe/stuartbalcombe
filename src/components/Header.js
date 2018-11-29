
import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`bg-grey-lightest px-8 md:px-32 py-8`};
`
const Title = styled.h1`
  ${tw`text-grey-darkest m-0`};
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const Header = ({ siteTitle }) => (
  <Container>
    <StyledLink to="/">
      <Title></Title>
    </StyledLink>
  </Container>
)

export default Header