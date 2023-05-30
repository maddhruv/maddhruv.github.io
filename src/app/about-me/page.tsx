import { Header } from "@/components/header";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Header location="post" />
      <main className="h-screen text-center">
        <h2 className="text-4xl text-yellow mb-4">About Me 👦🏼</h2>
        <p className="text-xl">
          Hey internet 🌐, I am Dhruv Jain, an enthusiastic frontend engineer
          right now working in{" "}
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            className="text-blue"
          >
            LinkedIn
          </Link>{" "}
          building Monitoring and Observability Experiences. In the past I have
          worked in companies like{" "}
          <Link
            href="https://www.atlassian.com/"
            target="_blank"
            className="text-blue"
          >
            Atlassian
          </Link>{" "}
          and{" "}
          <Link
            href="https://cleartax.in/"
            target="_blank"
            className="text-blue"
          >
            ClearTax
          </Link>
          .
        </p>
        <p className="text-xl">
          JavaScript and Front-end are the things that I love to work on. I have
          been working on React with TypeScript for the last 4 years, actually
          my whole career.
        </p>
      </main>
    </>
  );
}
