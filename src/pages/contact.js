import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Let's get in touch</h1>
    <p>This will be a contact form</p>
    {/* Contact Form */}
    <Link to="/">Back</Link>
  </Layout>
)

export default SecondPage
