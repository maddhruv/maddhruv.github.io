import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import posthog from "posthog-js";
import { useEffect } from "react";

import "react-notion-x/src/styles.css";
import config from "../lib/config";
import "../styles/globals.css";
import "../styles/code-theme.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
  posthog.capture("$pageview");
});
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const { title, appLink, handle, description } = config;
  const router = useRouter();

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY, {
      api_host: "https://app.posthog.com",
    });
    const handleRouteChange = () => posthog.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
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
