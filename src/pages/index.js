import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import { Banner, Fitness, Health, Packages, About, Radio } from "../components"

const IndexPage = ({ data }) => {
  const packages = data.allWpPackage.edges
  const bannerContent = data.allWpPageSection.nodes.filter(node => {
    return node.title === "Hero"
  })
  const fitnessContent = data.allWpPageSection.nodes.filter(node => {
    return node.title === "Fitness"
  })
  const healthContent = data.allWpPageSection.nodes.filter(node => {
    return node.title === "Health"
  })
  const aboutContent = data.allWpPageSection.nodes.filter(node => {
    return node.title === "About"
  })
  const radioContent = data.allWpPageSection.nodes.filter(node => {
    return node.title === "Radio"
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Banner content={bannerContent} />
      <Fitness content={fitnessContent} />
      <Packages packages={packages} />
      <Health content={healthContent} />
      <About content={aboutContent} />
      <Radio content={radioContent} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allWpPackage {
      edges {
        node {
          fitnessPackages {
            package
            packageDescription
            corporateDescription
            isCorporate
            order
            packageContents {
              content1
              content2
              content3
              content4
              content5
            }
          }
        }
      }
    }
    allWpPageSection {
      nodes {
        heroSectionContent {
          heroImage {
            sourceUrl
            title
            altText
          }
          heroText {
            headline1
            headline2
            captionText
          }
        }
        title
        healthSectionContent {
          healthText1
          healthText2
          healthText3
        }
        fitnessSectionContent {
          fitnessHeadline
          fitnessCaption
          fitnessImage {
            altText
            sourceUrl
            title
          }
          fitnessBulletPoints {
            bullet1
            bullet2
            bullet3
            bullet4
            bullet5
            bullet6
          }
        }
        aboutSectionContent {
          aboutImage {
            sourceUrl
            altText
          }
          aboutSectionText {
            about1
            about2
            about3
            about4
            about5
            about6
            about7
            about8
          }
        }
        radioSectionContent {
          radioText
          radioImage {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export default IndexPage
