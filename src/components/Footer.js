import React from 'react'

import Link from 'gatsby-link'
import './NavBar.css'

const BottomBar = props => {
	return (
        <footer>
          {/*
          <hr style={{ marginBottom: rhythm(1), marginTop: rhythm(1) }} />
          <Bio />
          */}
          <ul className="menu">
               <li><Link to='/now'>about</Link></li>
               <li><Link to='/a'>articles</Link></li>
               <li><Link to='/newsletter'>newsletter</Link></li>
          </ul>
        </footer>
	)
}

export default BottomBar;