import React from "react";
import Link from "gatsby-link";

export default function Tags({ list = [] }) {
  return (
    <ul className="tag-list">
      {list.map(tag => (
        <li key={tag} style={{ listStyle: 'none', display: 'inline', marginRight: '1rem', fontSize: '12px' }}>
          <Link to={`/tags/${tag}`} style={{ boxShadow: 'none', color: '#000', opacity: 0.59, textTransform: 'uppercase' }}>{tag}</Link>
        </li>
      ))}
    </ul>
  );
}