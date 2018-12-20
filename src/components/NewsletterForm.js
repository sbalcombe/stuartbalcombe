import React from "react"
import styled from 'react-emotion'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Form = styled.form`
	${tw`mb-0`}
`

const EmailInput = styled.input`
  ${tw`px-4 py-3 block w-full border border-solid border-grey-light mb-2 rounded appearance-none focus:outline-none focus:shadow-outline focus:shadow-none`};
`
const Button = styled.button`
  ${tw`px-4 py-3 block rounded w-full bg-indigo-light text-white hover:bg-indigo-dark hover:cursor-pointer`};
`

class NewsletterForm extends React.Component {
  constructor(props) {
   super(props);
   // Don't do this!
   this.state = { email: '' };
  }

  _handleSubmit = async (e) => {
    e.preventDefault;
    const result = await addToMailchimp(email, listFields)
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }
  
	render () {
		return (
			<Form onSubmit={this._handleSubmit(this.email, {})}>
      	<EmailInput placeholder="Your email" name="email" ref={this.email}></EmailInput>
      	<Button type="submit">Subscribe</Button>
      </Form>
		)
	}
}


export default NewsletterForm