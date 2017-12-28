import React from 'react'

const Button = props => {
	return (
		<a
			href={props.buttonLink}
			style={{
				padding: '16px',
				background: '#000',
				color: '#fff',
				borderRadius: '5px',
				display: 'inline-block',
				marginTop: '1rem',
				fontFamily: 'Montserrat, sans-serif'
			}}
			target='_blank'
		>
			{props.buttonText}
		</a>
	)
}

export default Button;