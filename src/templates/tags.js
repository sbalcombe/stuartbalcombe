import React from "react";
import GatsbyLink from "gatsby-link";

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
                <p>
                <strong>
                  <GatsbyLink to={fields.slug}>{frontmatter.title}</GatsbyLink>
                </strong> – {excerpt}{frontmatter.excerpt}</p>
              </li>
            );
          })}
        </ul>
        <GatsbyLink to="/tags">All tags</GatsbyLink>
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
              <GatsbyLink to={`/tags/${tagName}`} style={{ textTransform: 'capitalize'}}>{tagName}</GatsbyLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}