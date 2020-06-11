import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "../theme"
import Reset from "../utils/reset"

// components
import { Header, Container } from "./common"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Container>
        <Link to="/">
          <Header>{title}</Header>
        </Link>
        <main>{children}</main>
        <footer>
          Built with <span role="img">😷</span> care by{" "}
          <a href={`https://github.com/${social.github}`}>
            {author.name} aka {social.github}
          </a>
        </footer>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
