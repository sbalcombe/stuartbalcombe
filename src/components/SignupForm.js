import React from 'react';

import mailchimpFile from './mailchimp';

export default function SignupForm(props) {
  const mailchimp = props.mailchimp || mailchimpFile;
  const { text } = props;
  const keys = Object.keys(mailchimp);
  if (!keys.length) {
    return null;
  }

  const { account, shard, u, id, fakeField } = mailchimp;

  return <div className="call-to-action-box">
    <form
      action={`https://${account}.${shard}.list-manage.com/subscribe/post?u=${u}&id=${id}`}
      method="post"
      style={{
        marginBottom: 0,
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div style={{ display: 'inline-block' }} >
        <label htmlFor="email">{text}</label>
        <span style={{ whiteSpace: 'nowrap' }} >
          <input
            id="email"
            type="email"
            name="EMAIL"
            placeholder="Your email"
            style={{
              padding: '11px',
              lineHeight: '24px',
              borderRadius: '2px',
              border: '1px solid #DBDBDB',
              fontSize: '19px',
              fontWeight: 300,
              marginRight: '8px',
              color: '#484848'
            }}
            required
          />
          <span
            style={{
              position: 'absolute',
              left: '-5000px',
            }}
            aria-hidden
          >
            <input
              type="text"
              name={fakeField}
              tabIndex="-1"
            />
          </span>
          <input
            type="submit"
            name="subscribe"
            value="Sign me up!"
            style={{
              padding: '11px',
              lineHeight: '24px',
              borderRadius: '4px',
              border: '1px solid #007acc',
              background: '#007acc',
              color: '#ffffff',
              fontSize: '19px',
              fontWeight: 300,
            }}
          />
        </span>
        <div
          className="disclaimer"
          style={{
            marginTop: '1em',
            lineHeight: 1,
            fontSize: '0.8em',
          }}
        >
          I won't share your email with anyone. 

        </div>
      </div>
    </form>
  </div>;
}
SignupForm.propTypes = {
  text: React.PropTypes.string,
  mailchimp: React.PropTypes.object,
};