const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const createTagPages = (createPage, edges) => {
  // Tell it to use our tags template.
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  // Create an empty object to store the posts.
  const posts = {};
  console.log("creating posts");

  // Loop through all nodes (our markdown posts) and add the tags to our post object.

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = [];
        }
        posts[tag].push(node);
      });
    }
  });

  // Create the tags page with the list of tags from our posts object.
  createPage({
    path: "/tags",
    component: tagTemplate,
    context: {
      posts,
    },
  });

  // For each of the tags in the post object, create a tag page.

  Object.keys(posts).forEach(tagName => {
    const post = posts[tagName];
    createPage({
      path: `/tags/${_.kebabCase(tagName)}/`,
      component: tagTemplate,
      context: {
        posts,
        post,
        tag: tagName,
      },
    });
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  // add the tags to the query
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                title
                excerpt
                date(formatString: "DD MMMM, YYYY")
              }
            }
          }
        }
      }
    `).then(result => {
      console.log(result);
      const posts = result.data.allMarkdownRemark.edges;

      // call createTagPages with the result of posts
      createTagPages(createPage, posts);

      // this is the original code used to create the pages from markdown posts
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
