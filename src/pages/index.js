import React from "react"
/* 12: Import the Link module form Gatsby dependency
import { Link } from "gatsby"
// 21.1: Import the Footer component from the component directory
import Footer from "../components/footer"
// 25.1: Import the Header component from the component directory
import Header from "../components/header"*/
// 29.1 Import the Layout component from the component directory
import Layout from "../components/layout"
import Head from "../components/head"

// 1: Create IndexPage Component
const IndexPage = () => {
    return (
        // 29.2: Add the Layout Component
        <Layout>
            {/** 54.1: Adding Head Component */}
            <Head title="Home"/> 
            {/** 25.2: Add the Footer Component  
            < Header / > */}
            <h1>Home Page.</h1>
            <h2>Welecome to gatsby Bootcamp</h2>
            {/** 21.2: Add the Footer Component 
            < Footer / > */}
        </Layout>
    )
}
 
// 2: Export the IndexPage Component
export default IndexPage





// export default () => <div>Hello world, Welcome to Gatsby Bootcamp!</div >