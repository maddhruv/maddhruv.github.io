import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { getPageData, getPages } from "../../lib/notion";
import { getPageTitle } from "../../lib/utils";
import { Tags } from "../../components/tags";
import Link from "next/link";
import { CreatedAt } from "../../components/created-at";
import config from "../../lib/config";
import { useEffect } from "react";
import { generateRss } from "../../lib/generateRss";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    // additional prism syntaxes
    await Promise.all([import("prismjs/components/prism-yaml.js")]);
    return m.Code;
  })
);

const Blog = ({ pageData }) => {
  const { recordMap, title, tags, date, description } = pageData;
  const { appLink } = config;
  const blogUrl = `${appLink}/blog/${getPageTitle(title)}`;

  useEffect(() => {
    const commentsSection = document.getElementById("comments-section");
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "maddhruv/maddhruv.github.io");
    script.setAttribute("issue-term", "title");
    script.setAttribute("theme", "github-dark");
    script.crossOrigin = "anonymous";
    script.async = true;

    commentsSection.appendChild(script);

    return () => (commentsSection.innerHTML = null);
  }, []);

  return (
    <>
      <Head>
        <title>{title} - Dhruv Jain</title>
        <meta name="description" content={description} />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={blogUrl}
        openGraph={{
          title,
          description,
          url: blogUrl,
          images: [
            {
              url: `${config.host}/api/og?title=${title}&description=${description}&tags=${tags}`,
            },
          ],
        }}
      />
      <div className="🏫">
        <Link href="/">
          <h2 className="🦋">Dhruv Jain</h2>
        </Link>
        <div className="📔">
          <header>
            <Tags tags={tags} />
            <CreatedAt date={date} />
            <h1 className="🦁">{title}</h1>
          </header>
          <main>
            <NotionRenderer
              className="📟"
              recordMap={recordMap}
              darkMode={true}
              components={{ Code }}
            />
          </main>
          <section id="comments-section" />
        </div>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  const title = context.params.title;

  const pageData = await getPageData(title);

  return {
    props: {
      pageData,
    },
  };
}

export async function getStaticPaths() {
  const pages = await getPages();

  generateRss(pages);

  return {
    paths: pages.map((page) => `/blog/${getPageTitle(page.title)}`),
    fallback: false,
  };
}
