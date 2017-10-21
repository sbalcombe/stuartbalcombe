import React from 'react'
import {FaDribbble, FaLinkedin, FaTwitter} from 'react-icons/lib/fa'

export default function () {
	return (
		<footer>
			<ul
			  style={{
				marginTop: '2rem',
				listStyle: 'none',
				display: 'inline'
			  }}
			>
				<li style={{ display: 'inline' }}><a style={{marginRight: '1rem', boxShadow: 'none' }} href='https://twitter.com/stubalcombe' target='_blank'><FaTwitter size={24} /></a></li>
				<li style={{ display: 'inline' }}><a style={{marginRight: '1rem', boxShadow: 'none' }} href='https://dribbble.com/sbalcombe' target='_blank'><FaDribbble size={24} /></a></li>
				<li style={{ display: 'inline' }}><a style={{marginRight: '1rem', boxShadow: 'none' }} href='https://www.linkedin.com/in/stuartbalcombe/' target='_blank'><FaLinkedin size={24} /></a></li>
				<li style={{ display: 'inline' }}><a style={{marginRight: '1rem', boxShadow: 'none' }} href='mailto:stuart@stuartbalcombe.com' target='_blank'>or email</a></li>
			</ul>
		</footer>
	)
}