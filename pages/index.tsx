import Link from "next/link";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { CreatedAt } from "../components/created-at";
import { Tags } from "../components/tags";
import { getPages } from "../lib/notion";
import { getPageTitle } from "../lib/utils";
import { Socials } from "../components/socials";
import config from "../lib/config";

const IndexPage = ({ pages }) => {
  const { title, description, appLink } = config;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NextSeo title={title} description={description} canonical={appLink} />
      <div className="🏠">
        <header className="🐶">
          <div className="📇">
            <h1 className="👦🏼">Dhruv Jain</h1>
            <a href="https://www.linkedin.com/in/midhruvjaink/">
              <h2 className="🧑🏽‍💻">Software Engineer @LinkedIn</h2>
            </a>
            <Socials />
          </div>
          <div className="🔖">All Posts</div>
        </header>
        <main className="📑">
          {pages.map(({ tags, date, title }) => {
            return (
              <Link href={`/blog/${getPageTitle(title)}`}>
                <a className="📜">
                  <Tags tags={tags} />
                  <CreatedAt date={date} />
                  <h3 className="🐨">{title}</h3>
                </a>
              </Link>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const pages = await getPages();

  return {
    props: {
      pages,
    },
  };
}
