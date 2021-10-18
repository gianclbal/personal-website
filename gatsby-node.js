// const { reporter } = require("gatsby/node_modules/gatsby-cli/lib/reporter/reporter");

// exports.createPages = async function ({ actions, graphql, reporter }) {
//   const { data } = await graphql`
//     query {
//       allMdx(
//         sort: { fields: frontmatter___date, order: DESC }
//         filter: {fileAbsolutePath: {regex: "/posts/"}}
//       ) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `

// //Create single blog posts
// const posts = data.allMdx.edges;

//     posts.forEach(node => {
//         const slug = node.frontmatter.slug;
//         const id = node.id;
//         actions.createPages({
//             path: slug,
//             component: require.resolve("./src/templates/post.js"),
//             context:{id},
//         })

        
//     })
// }

// //Handle errors

// if(data.errors){
//     reporter.panicOnBuild(`Error with GraphQL. Sorry about that.`);
//     return;
// }