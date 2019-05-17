// 39.3: Import node core module path
const path = require('path')

// 39.1: docs - Gatsby Node APIs - OnCreateNode -eg:
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  
  // 32.2: Filter for only MarkdownRemark files
  if (node.internal.type === 'MarkdownRemark') {
        //console.log(JSON.stringify(node, undefined, 4))
        // 39.4: Filtre for the slug - filename without the .ext or filetype
        const slug = path.basename(node.fileAbsolutePath, '.md')
        //console.log('$$$$$$$$$$$$$$$$@',slug)

    // create a new node field.
        // 39.5: creating the new field slug in the node
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
  }
} 

// 41.1: docs - Gatsby Node APIs - createPages -eg;
module.exports.createPages = async ({ graphql, actions  }) => {
    const { createPage } = actions

    // 41.2: Get Path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    
    // 41.3: Get Markdown Data & @ 48.1: add the allContentfulBlogPost query
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    // 41.4: Create New Pages
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    }) 
    // 48.2: Create New Pages
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}