import { NotionRenderer } from "react-notion-x";

import { getPageData, getPages } from "../../lib/notion";
import { getPageTitle } from "../../lib/utils";
import { Tags } from "../../components/tags";
import Link from "next/link";

const Blog = ({ pageData }) => {
  const { recordMap, title, tags } = pageData;
  return (
    <div className="🏫">
      <Link href="/">
        <h2 className="🦋">Dhruv Jain</h2>
      </Link>
      <div className="📔">
        <header>
          <Tags tags={tags} />
          <h1>{title}</h1>
        </header>
        <main>
          <NotionRenderer
            className="📟"
            recordMap={recordMap}
            darkMode={true}
          />
        </main>
      </div>
    </div>
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
