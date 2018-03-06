import React from "react";
import Link from "gatsby-link";
const _ = require('lodash');

export default function Tags({ list = [], date }) {
  return (
    <ul className="tag-list" style={{ display: 'inline', marginLeft: 0 }}>

      {list.map(tag => (
        <li key={tag} style={{ listStyle: 'none', display: 'inline', fontSize: '12px' }}>      
          <Link to={`/tags/${_.kebabCase(tag)}/`} style={{ boxShadow: 'none', color: '#000', opacity: 0.59, textTransform: 'uppercase' }}>{tag}{list.indexOf(tag) < list.length -1 ? ', ' : ' '}</Link>
        </li>
      ))}
    </ul>
  );
}