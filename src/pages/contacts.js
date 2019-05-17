// 9: Import all neccesarry components
import React from "react"
/* 14: Import the Link module form Gatsby dependency
import { Link } from "gatsby"
// 21.1: Import the Footer component from the component directory
import Footer from "../components/footer"
// 25.1: Import the Header component from the component directory
import Header from "../components/header" */
// 29.1 Import the Layout component from the component directory
import Layout from "../components/layout"
import Head from "../components/head"

// 10: Create ContactsPage Component
const ContactsPage = () => {
    return (
        // 29.2: Add the Layout Component
        <Layout>
            <Head title="Contact"/>
            {/** 25.2: Add the Footer Component  
            < Header /> */}
            <h1>Contacts</h1>
            <p>Contact details will be added here later.</p>
            {/* 15: Link to Home Page 
            <p>Need to Know? <Link to="/about"> About me.</Link></p>
            < p > Go Back to < Link to = "/" > Home Page < /Link></p >
            {/** 21.2: Add the Footer Component 
            < Footer /> */} 
        </Layout >
    )
}

// 11: Export the ContactsPage Component
export default ContactsPage