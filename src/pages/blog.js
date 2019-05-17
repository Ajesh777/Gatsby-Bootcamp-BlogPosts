// 3: Import all neccesarry components
import React from "react"
/* 12: Import the Link module form Gatsby dependency
import { Link } from "gatsby"
// 21.1: Import the Footer component from the component directory
import Footer from "../components/footer"
// 25.1: Import the Header component from the component directory
import Header from "../components/header" */
// 29.1 Import the Layout component from the component directory
import Layout from "../components/layout"
// 38.1: Import graphql, useStaticQuery & @ 42.1: Link
import { Link, graphql, useStaticQuery } from "gatsby"
// 45.1 Import blog Styles
import blogStyles from './blog.module.scss'
import Head from "../components/head"

// 4: Create BlogPage Component
const BlogPage = () => {
    // 38.2: create variable data to store staticQuery function result
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
            allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "DD-MMM-YYYY")
                    }
                }
            }
        }
    `)

    return (
        // 29.2: Add the Layout Component
        <Layout>
            <Head title="Blog"/>
            <h1>Blog Page</h1>
            {/** 38.3 create ol & map data using for */}
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h3>{edge.node.frontmatter.title}</h3>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h3>{edge.node.title}</h3>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
        /*<div>
            {/** 25.2: Add the Footer Component} 
            <Header />
            <h1>Blog Page</h1>
            <p>Posts will show up here later on.</p>
            <p>Need a Developer? <Link to="/contacts">Contact me.</Link></p>
            <p>Need to Know?<Link to="/about">About me.</Link></p>
            {/** 21.2: Add the Footer Component} 
            <Footer />
        </div>*/
    )
}

// 5: Export the BlogPage Component
export default BlogPage