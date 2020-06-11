import React from "react"
import { Flex } from "reflexbox"
import { useStaticQuery, graphql } from "gatsby"
import { Avatar } from "./common"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
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
    <Flex>
      <Avatar fixed={data.avatar.childImageSharp.fixed} alt={author.name} />
      <p>
        Written by{" "}
        <strong>
          <a href={`https://github.com/${social.github}`}>
            {author.name} aka {social.github}
          </a>
        </strong>
        <br />
        {author.summary}
      </p>
    </Flex>
  )
}

export default Bio
