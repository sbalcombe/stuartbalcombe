import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class NewsletterSignup extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ``,
    }
  }

  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  // Post to MC server & handle its response
  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg,
          })
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`,
            msg: result.msg,
          })
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          msg: err,
        })
      })
  }

  _handleFormSubmit = e => {
    console.log(this.state)
    e.preventDefault()
    e.stopPropagation()

    this.setState(
      {
        status: `sending`,
        msg: null,
      }
    )

    // setState callback (subscribe email to MC)
    this._postEmailToMailchimp(this.state.email, {
      pathname: document.location.pathname,
    })
  }

  render() {
    return (
      <div>
        {this.state.status === `success` ? (
          <div style={{ color: '#50B83C' }}>Thank you! Youʼll receive your first email shortly.</div>
        ) : (
          <div>
            <form
              id="email-capture"
              method="post"
              noValidate
            >
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@email.com"
                  onChange={this._handleEmailChange}
                  className="subscribe-input"
                />
                <button
                  type="submit"
                  onClick={this._handleFormSubmit}
                  className="subscribe-button"
                >
                  Get on the List
                </button>
                {this.state.status === `error` && (
                  <div
                    dangerouslySetInnerHTML={{ __html: this.state.msg }}
                    style={{ color: '#DE3618' }}
                  />
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default NewsletterSignup