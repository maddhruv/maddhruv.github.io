import NProgress from "nprogress";
import Router from "next/router";
import { DefaultSeo } from "next-seo";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import config from "../lib/config";
import "../styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const { title, appLink, handle, description } = config;
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: appLink,
          site_name: title,
          title,
          description,
        }}
        twitter={{
          handle: `@${handle}`,
          site: `@${handle}`,
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
