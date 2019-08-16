import React from 'react'
import styled from 'react-emotion'

const QuoteWrapper = styled.div`
  ${tw`border-solid border-l-4 border-t-0 border-b-0 border-r-0 border-indigo-light bg-white px-4 flex flex-col justify-between leading-normal mb-12`};
`

const ItemsCenter = styled.div`
  ${tw`flex items-center`};
`

const QuoteText = styled.p`
  ${tw`text-grey-darker text-base`};
`

const QuoteAuthorWrapper = styled.div`
  ${tw`text-sm`};
`

const QuoteAuthorName = styled.p`
  ${tw`text-black leading-none mb-1`};
`

const QuoteAuthorTitle = styled.p`
  ${tw`text-grey-dark mb-0`};
`

const QuoteImg = styled.img`
  ${tw`w-16 h-16 rounded-full mr-4 mb-0`}
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const Quote = (props) => (
	<QuoteWrapper>
      <QuoteText>"{props.text}"</QuoteText>
      <ItemsCenter>
        <QuoteImg src={props.img} alt={"Avatar of"}></QuoteImg>
        <QuoteAuthorWrapper>
          <QuoteAuthorName>{props.name}</QuoteAuthorName>
          <QuoteAuthorTitle>{props.title}, <StyledLink href={props.link}>{props.company}</StyledLink></QuoteAuthorTitle>
        </QuoteAuthorWrapper>
      </ItemsCenter>
    </QuoteWrapper> 
)

export default Quote