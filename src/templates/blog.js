// 41.1: Import all the req dependencies
import React from 'react'
import Layout from '../components/layout'
// 42.1: Import graphql
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head"

// 43.2:
export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "DD-MMM-YYYY")
            body {
                json
            }
        }
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                date(fromNow: false)
            }
            html
        }
    }
`

// 41.2: Create the Blog Func
/**  */
const Blog = (props) => {
    /** 50.2 Rendering Images from contentful */
    const options = {
        renderNode: {
            "embedded-assets-block": (node) => {
                const alt = node.date.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url
                return <img alt={alt} src={url} />
            }
        }
    }

    if (props.data.contentfulBlogPost == null) {
        return (
            <Layout>
                <Head title={props.data.markdownRemark.frontmatter.title}/>
                <h2>{props.data.markdownRemark.frontmatter.title}</h2>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </Layout>
        )
    } else if (props.data.markdownRemark == null) {
        return (
            <Layout>
                <Head title={props.data.contentfulBlogPost.title}/>
                <h2>{props.data.contentfulBlogPost.title}</h2>
                <p>{props.data.contentfulBlogPost.publishedDate}</p>
                {/** 50.1: body-json content parsing form contentful */}
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </Layout>
        )
    }
}

// 41.3: Export the Blog Func
export default Blog 