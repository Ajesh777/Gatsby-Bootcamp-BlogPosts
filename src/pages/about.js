// 6: Import all neccesarry components
import React from "react"
/* 16: Import the Link module from Gatsby dependency
import { Link } from "gatsby"
// 21.1: Import the Footer component from the component directory
import Footer from "../components/footer"
// 25.1: Import the Header component from the component directory
import Header from "../components/header" */
// 29.1 Import the Layout component from the component directory
import Layout from "../components/layout"
import Head from "../components/head"

// 7: Create AboutPage Component
const AboutPage = () => {
    return (
        // 29.2: Add the Layout Component
        <Layout>
            <Head title="About"/>
            <h1>About Page</h1> 
            <p>About Cotent will show up here later on.</p>
        </Layout>
        /*<div> 
            {/** 25.2: Add the Footer Component } 
            <Header />
            <h1>About Page</h1> 
            <p>About Cotent will show up here later on.</p>
            {/* 17: Links to Home & Contacts}
            <p>Need a Developer? <Link to="/contacts">Contact me.</Link></p>
            <p>Go Back to <Link to="/">Home Page</Link></p>
            {/** 21.2: Add the Footer Component }
            <Footer />
        </div>*/
    )
}

// 8: Export the AboutPage Component
export default AboutPage