import React from "react"
import styled from 'react-emotion'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Form = styled.form`
	${tw`mb-8 w-full max-w-md`}
`

const FormWrapper = styled.div`
  ${tw`block md:flex items-center rounded-lg shadow-none md:shadow bg-tranparent md:bg-white`}
`

const EmailInput = styled.input`
  ${tw`bg-white border-none w-full rounded-lg md:rounded-none md:rounded-l-lg text-grey-darkest py-4 px-4 leading-tight md:shadow-none shadow mb-4 md:mb-0`};
`
const Button = styled.button`
  ${tw`w-full md:w-auto md:flex-no-shrink bg-indigo-light hover:bg-indigo border-indigo-light hover:border-indigo uppercase font-bold tracking-wide border-4 text-white py-3 px-4 md:rounded-r-lg text-base md:shadow-none shadow hover:cursor-pointer`};
`

const SubmitMsg = styled.p`
  ${tw`text-xs text-grey-dark mt-4 block truncate mb-0`};
`

class NewsletterForm extends React.Component {
  state = {
    name: null,
    email: null,
    submitMsg: ''
  }

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email, {
      PATHNAME: this.props.location,
    })
    .then(({msg, result}) => {
      console.log('msg', `${result}: ${msg}`);
      if (result !== 'success') {
        throw msg;
      }
      this.setState({
        submitMsg: msg,
        email: ''
      });
    })
    .catch(err => {
      console.log('err', err);
      this.setState({submitMsg: err});
    });
  }

	render () {
		return (
			<Form onSubmit={this._handleSubmit} className="NewsletterForm">
        <FormWrapper>
      	<EmailInput placeholder="Your email" type="email" name="email" aria-label="Email signup" onChange={this._handleChange} ref={this.email}></EmailInput>
      	<Button type="submit">Join Now</Button>
        <SubmitMsg>{this.state.submitMsg}</SubmitMsg>
        </FormWrapper>
      </Form>
		)
	}
}


export default NewsletterForm