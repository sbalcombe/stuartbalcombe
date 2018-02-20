import React from "react";
import Link from "gatsby-link";
const _ = require('lodash');

export default function Tags({ list = [], date }) {
  return (
    <ul className="tag-list">
      {list.map(tag => (
        <li key={tag} style={{ listStyle: 'none', display: 'inline', marginRight: '1rem', fontSize: '12px' }}>
          <Link to={`/tags/${_.kebabCase(tag)}/`} style={{ boxShadow: 'none', color: '#000', opacity: 0.59, textTransform: 'uppercase' }}>{tag} </Link>
          <span style={{ color: '#000', opacity: 0.59, textTransform: 'uppercase'}}> | {date}</span>
        </li>
      ))}
    </ul>
  );
}