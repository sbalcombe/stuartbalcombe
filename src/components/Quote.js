import React from 'react'

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
  ${tw`w-10 h-10 rounded-full mr-4 mb-0`}
`

const StyledLink = styled.a`
  ${tw`no-underline text-indigo-light font-bold hover:underline`};
`

const Quote = (props) => (
	<QuoteWrapper>
      <QuoteText>Nodding violently in agreement with Stuart Balcombe’s newsletter this morning. If you're trying to build great products that create real value in your customers' lives, but you're not on his list already, do yourself a favor & sign up.</QuoteText>
      <ItemsCenter>
        <QuoteImg src={claire} alt="Avatar of Claire Suellentrop"></QuoteImg>
        <QuoteAuthorWrapper>
          <QuoteAuthorName>Claire Suellentrop</QuoteAuthorName>
          <QuoteAuthorTitle>Founder, <StyledLink href="">Forget the Funnel</StyledLink></QuoteAuthorTitle>
        </QuoteAuthorWrapper>
      </ItemsCenter>
    </QuoteWrapper> 
)

export default Quote