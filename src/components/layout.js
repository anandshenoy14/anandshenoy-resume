import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Card from "../components/card"
import Data from "../components/data"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            cards{
              beforeYear
              afterYear
              lines
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            border: `25px solid midnightblue`,
            minHeight: 2000,
            borderTop : 0
          }}
        >
          <main>
            {children}
            {Data.cards.map((card) => (
              <Card beforeYear={card.beforeYear} afterYear={card.afterYear} title={card.title} lines={card.lines} />
            ))}
          </main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
