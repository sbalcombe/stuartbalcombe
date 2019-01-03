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
      	<EmailInput placeholder="Your email" type="email" name="email" aria-label="Email signup" onChange={this._handleChange} ref={this.email}></EmailInput>
      	<Button type="submit">Subscribe</Button>
        <SubmitMsg>{this.state.submitMsg}</SubmitMsg>
      </Form>
		)
	}
}


export default NewsletterForm