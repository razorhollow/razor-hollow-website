// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>We make digital content for the outdoor professional</p>
      <StaticImage
        alt="Driftboat Fly Fishing Guide"
        src='https://images.unsplash.com/photo-1519443608216-0adf2e4a7515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
      />
      <StaticImage  
        alt='Waterfowl Hunting Guide'
        src='../images/rhett-noonan-799IZNkVopA-unsplash.jpg'
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage