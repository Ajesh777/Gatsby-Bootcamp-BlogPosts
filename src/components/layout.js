// 26: Import all the dependencies required
import React from "react"
//import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

// 27: Create IndexPage Component
const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
                {/* 13: Old a tag reffrence & New Gatsby Link for SPA :
                <p>Need a Developer? <a href="/contacts" target="_blank">Contact me.</a></p> 
                <p>Need a Developer? <Link to="/contacts">Contact me.</Link></p>
                <p>Need to Know?<Link to="/about">About me.</Link></p>-->*/}
            </div>
            <Footer />
        </div>
    )
}
 
// 28: Export the IndexPage Component
export default Layout