import React from 'react'

class NewsletterSignup extends React.Component {
  render() {
    return (
      <div>
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
                  className="subscribe-input"
                />
                <button
                  type="submit"
                  className="subscribe-button"
                >
                  Get on the List
                </button>
              </div>
            </form>
          </div>
      </div>
    )
  }
}

export default NewsletterSignup