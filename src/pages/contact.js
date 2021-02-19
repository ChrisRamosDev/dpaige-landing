import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"

const Contact = styled.div`
  display: flex;
  margin: 50px 10vw;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <Link to="/">Back</Link>
    <Contact>
      <h1>Let's get in touch</h1>
      {/* Contact Form */}
    </Contact>
  </Layout>
)

export default SecondPage
