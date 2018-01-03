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
        <ul className='nav-list'>
          <li>
            <Link
              className='nav-list-link'
              to={'/work-with-me'}
            >
              Work with Me
            </Link>
          </li>
          <li>
            <Link
              className='nav-list-link'
              to={'/a'}
            >
              Articles
            </Link>
          </li>
        </ul>
      </div>
	)
}

export default NavBar;