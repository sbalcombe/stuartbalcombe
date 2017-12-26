import React from 'react'
import Link from 'gatsby-link'
import './NavBar.css'


const NavBar = () => {
	return (
      <div 
      	role='navigation'
        className='topbar'
      >
        <Link
          className='logo-link'
          to={'/'}
        >
          <h1>
            Stuart Balcombe
          </h1>
        </Link>
      </div>
	)
}

export default NavBar;