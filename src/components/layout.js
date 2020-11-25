import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const DarkMode = React.lazy(() => import("./darkmode"));

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
  `);

  const { author, social } = data.site.siteMetadata;

  const isSSR = typeof window === "undefined";

  return (
    <div id="container">
      <header>
        <Link to="/">
          <h1 id="title">{title}</h1>
        </Link>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <DarkMode />
          </React.Suspense>
        )}
      </header>
      <main>{children}</main>
      <footer>
        Built with{" "}
        <span role="img" aria-label="care">
          😷
        </span>{" "}
        care by{" "}
        <a href={`https://github.com/${social.github}`}>
          {author.name} aka {social.github}
        </a>
      </footer>
    </div>
  );
};

export default Layout;
