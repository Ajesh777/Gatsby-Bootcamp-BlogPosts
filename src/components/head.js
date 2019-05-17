/** 53.1: Import all req componnents */
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

/** 53.2: Create the helmet func */
const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}/>
    )
}

/** 53.3: Export the Head component */
export default Head