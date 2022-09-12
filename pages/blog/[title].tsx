import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import Head from "next/head";

import { getPageData, getPages } from "../../lib/notion";
import { getPageTitle } from "../../lib/utils";
import { Tags } from "../../components/tags";
import Link from "next/link";
import { CreatedAt } from "../../components/created-at";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    // additional prism syntaxes
    await Promise.all([
      import("prismjs/components/prism-git.js"),
      import("prismjs/components/prism-go.js"),
      import("prismjs/components/prism-yaml.js"),
    ]);
    return m.Code;
  })
);

const Blog = ({ pageData }) => {
  const { recordMap, title, tags, date } = pageData;
  return (
    <>
      <Head>
        <title>{title} - Dhruv Jain</title>
      </Head>
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

  return {
    paths: pages.map((page) => `/blog/${getPageTitle(page.title)}`),
    fallback: false,
  };
}