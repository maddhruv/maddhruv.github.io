import Link from "next/link";
import { Tags } from "../components/tags";
import { getPages } from "../lib/notion";
import { getPageTitle } from "../lib/utils";

const IndexPage = ({ pages }) => {
  return (
    <div className="🏠">
      <header className="🐶">
        <div className="📇">
          <h1 className="👦🏼">Dhruv Jain</h1>
          <h2 className="🧑🏽‍💻">Software Engineer @LinkedIn</h2>
        </div>
        <div className="🔖">All Posts</div>
      </header>
      <main className="📑">
        {pages.map(({ tags, date, title }) => {
          return (
            <Link href={`/blog/${getPageTitle(title)}`}>
              <a className="📜">
                <Tags tags={tags} />
                <div className="📆">
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "2-digit",
                  })}
                </div>
                <h3 className="🐨">{title}</h3>
              </a>
            </Link>
          );
        })}
      </main>
    </div>
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
