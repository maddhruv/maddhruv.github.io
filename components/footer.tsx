import Link from "next/link";
import config from "@/lib/config";
import { Github, LinkedIn, Twitter } from "./icons";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                {config.title}
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow me
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4"></li>
                <li className="mb-4">
                  <Link
                    href="https://github.com/maddhruv"
                    target="_blank"
                    className="flex gap-1 hover:underline hover:text-gray-300 items-center"
                  >
                    <Github /> GitHub
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="https://www.linkedin.com/in/midhruvjaink/"
                    target="_blank"
                    className="flex gap-1 hover:underline hover:text-gray-300 items-center"
                  >
                    <LinkedIn /> LinkedIn
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="https://twitter.com/maddhruv"
                    target="_blank"
                    className="flex gap-1 hover:underline hover:text-gray-300 items-center"
                  >
                    <Twitter /> Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Extras
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    className="hover:underline"
                    href="https://github.com/maddhruv/maddhruv.github.io"
                    target="_blank"
                  >
                    Source Code
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:underline" href="/about-me">
                    About Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            Built with{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="hover:text-gray-200 hover:underline"
            >
              Next.js
            </Link>{" "}
            &{" "}
            <Link
              href="https://www.sanity.io/"
              target="_blank"
              className="hover:text-gray-200 hover:underline"
            >
              Sanity
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
