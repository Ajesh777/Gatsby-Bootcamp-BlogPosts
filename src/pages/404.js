/** 51.1: Import all the required components */
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"

/** 51.2: Create the Not Found func */
const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Page Not Found </h1>
            <p><Link to="/">Head Home</Link></p>
        </Layout>
    )
}

/** 51.3: Export the 404 func */
export default NotFound