import React from "react"
import jsonp from "jsonp"

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null
    }
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf("@") === -1) {
      this.setState({
        status: "error"
      })
      return
    }
    const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(this.input.value)}`;
    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          this.setState({
            status: 'error',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          })
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
        }
      })
    )
  }
  render() {
    const { action, messages, className, style, styles } = this.props
    const { status } = this.state
    return (
      <div>
        <form 
          action={action} 
          method="post" 
          noValidate
          style={{
            display: 'block'
          }}
        >
          <input
            ref={node => (this.input = node)}
            type="email"
            defaultValue=""
            name="EMAIL"
            required={true}
            placeholder={messages.inputPlaceholder}
            style={styles.input}
          />
          <button
            disabled={this.state.status === "sending" || this.state.status === "success"}
            onClick={this.onSubmit}
            type="submit"
            style={styles.button}
          >
            {messages.btnLabel}
          </button>
          {status === "sending" && <p style={{ fontSize: 18, color: 'auto' }} dangerouslySetInnerHTML={{ __html: messages.sending }} />}
          {status === "success" && <p style={{ fontSize: 18, color: 'green' }} dangerouslySetInnerHTML={{ __html: messages.success }} />}
          {status === "error" && <p style={{ fontSize: 18, color: 'red' }} dangerouslySetInnerHTML={{ __html: messages.error }} />}
        </form>
      </div>
    )
  }
}

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: "Your email...",
    btnLabel: "Subscribe",
    sending: "...",
    success: "Almost finished!<p>To complete the subscription process, please click the link in the email I just sent you.</p>",
    error: "Oops, something went wrong please try again."
  },
  styles: {
    button: {
      background: '#000',
      color: '#fff',
      padding: '12px',
      border: 'solid 2px #000',
      outline: 'none',
      resize: 'none',
      cursor: 'pointer',
      marginBottom: '16px',
      width: '35%',
      fontFamily: 'Montserrat, sans-serif',
      borderBottomRightRadius: '5px',
      borderTopRightRadius: '5px'
    },
    input: {
      padding: '12px',
      border: '2px solid #000',
      width: '65%',
      marginBottom: '16px',
      borderBottomLeftRadius: '5px',
      borderTopLeftRadius: '5px'
    }
  }
}

export default SubscribeForm