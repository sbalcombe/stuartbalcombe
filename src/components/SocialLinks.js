import React from 'react'
import {FaDribbble, FaLinkedin, FaTwitter} from 'react-icons/lib/fa'

export default function () {
	return (
		<div 
		  style={{
			marginTop: '2rem',
		  }}
		>
			<a style={{marginRight: '1rem', boxShadow: 'none' }} href='https://twitter.com/stubalcombe' target='_blank'><FaTwitter size={40} /></a>
			<a style={{marginRight: '1rem', boxShadow: 'none' }} href='https://dribbble.com/sbalcombe' target='_blank'><FaDribbble size={40} /></a>
			<a style={{marginRight: '1rem', boxShadow: 'none' }} href='https://www.linkedin.com/in/stuartbalcombe/' target='_blank'><FaLinkedin size={40} /></a>
		</div>
	)
}