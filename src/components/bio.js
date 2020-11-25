import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div className="flex">
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
    </div>
  );
};

export default Bio;
