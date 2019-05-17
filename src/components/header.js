// 22: Import all the required dependencies
import React from "react"
// 33.1: Import graphql, useStaticQuery
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

// 23: Create Footer Component
const Header = () => { 
    // 33.2: create variable data to store staticQuery function result
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
        <header className={headerStyles.header}>
            {/** 33.3: Injecting data as Site Header*/} 
            <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1>
            {/* 23.3: Create Navigation*/} 
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    )
}

// 24: Export the Header Component
export default Header