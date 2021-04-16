import React, { useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const ColorSchemes = React.lazy(() => import("./ColorSchemes"));

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

  useEffect(() => {
    console.log(process.env.ph_project_api_key);
    import("posthog-js")
      .then(module => module.default)
      .then(posthog => {
        posthog.init(process.env.ph_project_api_key, {
          api_host: process.env.ph_instance_address,
          loaded: () => console.log("loaded"),
        });
        posthog.capture("$pageview");
      });
  }, []);

  return (
    <div id="📦">
      <header>
        <Link to="/">
          <h1 id="🥑">{title}</h1>
        </Link>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <ColorSchemes />
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
