// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Hero from '../components/Hero/Hero'
import HitList from '../components/HitList/HitList'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Hero />
      <HitList />
      {/* <StaticImage   */}
        {/* alt='Waterfowl Hunting Guide' */}
        {/* src='../images/rhett-noonan-799IZNkVopA-unsplash.jpg' */}
      {/* /> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage