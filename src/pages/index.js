// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import Hero from '../components/Hero/Hero'
import HitList from '../components/HitList/HitList'
import { library, dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

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