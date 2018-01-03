import React from 'react'

import Link from 'gatsby-link'
import './NavBar.css'

const BottomBar = props => {
	return (
		<div className='mobile-bottom-bar'>
          <Link 
          	className='bottom-bar-link'
          	to='/work-with-me'
          >
          	<div>Work with Me</div>
          </Link>
          <Link 
          	className='bottom-bar-link'
          	to='/a'
          >
          	<div>Articles</div>
          </Link>
        </div>
	)
}

export default BottomBar;