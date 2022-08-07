import NProgress from "nprogress";
import Router from "next/router";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import "../styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
