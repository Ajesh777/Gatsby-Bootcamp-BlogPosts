// 18: Import all the required dependencies
import React from "react"
// 34.1: Import graphql, useStaticQuery
import { graphql, useStaticQuery } from "gatsby"
// 44.1: Import footer style
import footerStyles from './footer.module.scss'

// 19: Create Footer Component
const Footer = () => {
    // 34.2: create variable data to store statiQuery func data
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                    author
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footer}>
            {/* 19.3: (option + G) = Copyright symbol */}
            <p>Created by {data.site.siteMetadata.author}, © 2019</p>
        </footer>
    )
}

// 20: Export the Footer Component
export default Footer