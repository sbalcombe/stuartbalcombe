import React from "react";
import GatsbyLink from "gatsby-link";
const _ = require('lodash');

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <div>
        <h1 style={{ textTransform: 'capitalize'}}>
          {/* {post.length} post{post.length === 1 ? "" : "s"} tagged with */}{tag}
        </h1>
        <ul style={{ listStyle: 'none'}}>
          {post.map(({ id, frontmatter, excerpt, fields }) => {
            return (
              <li key={id}>
                <p style={{ marginBottom: 0}}>
                <strong>
                  <GatsbyLink to={fields.slug}>{frontmatter.title}</GatsbyLink>
                </strong> – {excerpt}{frontmatter.excerpt}</p>
                <span style={{ color: '#000', opacity: 0.59, textTransform: 'uppercase', fontSize: '12px'}}>{frontmatter.date}</span>
              </li>
            );
          })}
        </ul>
        <GatsbyLink to="/a">All Posts</GatsbyLink> | <GatsbyLink to="/tags">More tags</GatsbyLink>
      </div>
    );
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName];
          return (
            <li key={tagName}>
              <GatsbyLink to={`/tags/${_.kebabCase(tagName)}/`} style={{ textTransform: 'capitalize'}}>{tagName}</GatsbyLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}