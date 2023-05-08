import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle 
} from './layout.module.css'
import Seo from './seo'
import NavBar from './NavBar/NavBar'

const Layout = ({ pageTitle, children, title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <NavBar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout