/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../assets/css/layout.css"
import SEO from "../pages";
import Footer from './Footer'

const Layout =
// language=GraphQL
({ children }) => (
  <StaticQuery
query={graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
                description
                keywords
            }
        }
        allContentfulLink(sort: { fields: [createdAt], order: ASC }){
            edges{
                node{
                    title
                    url
                    createdAt
                }
            }
        }
    }
`}
render={data => (
  <>
    <Header/>
    <main>
      {children}
    </main>
    <Footer data={data}>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:realafe21@gmail.com">Email us</a> to ask anything. © 2018
    </Footer>
  </>
)}/>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
