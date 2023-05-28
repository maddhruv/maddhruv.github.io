"use client";
import config from "@/lib/config";
import Link from "next/link";
import { useRef } from "react";

interface HeaderProps {
  location: "home" | "post";
}

export const Header: React.FC<HeaderProps> = ({ location }) => {
  const HeadingComponent = location === "home" ? "h1" : "p";
  const ref = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    ref.current?.classList.toggle("hidden");
  };

  return (
    <header>
      <nav className="bg-transparent px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl border-b pb-2 lg:pb-8">
          <Link href="/" className="flex items-center">
            <span className="text-green text-2xl pr-1">*</span>
            <HeadingComponent
              className={`self-center text-3xl font-semibold whitespace-nowrap text-blue hover:text-blue-600`}
            >
              {config.title}
            </HeadingComponent>
          </Link>

          <div className="flex items-center lg:hidden">
            <button
              onClick={handleMenuClick}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-700 focus:text-gray-200 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            ref={ref}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 border-t lg:border-none">
              <li>
                <Link
                  className="py-2 flex items-center gap-2 pr-4 pl-3 text-primary-600 hover:text-primary-400 rounded lg:bg-transparent lg:p-0"
                  href="/categories"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 flex items-center gap-2 pr-4 pl-3 text-primary-600 hover:text-primary-400 rounded lg:bg-transparent lg:p-0"
                  href="/rss.xml"
                >
                  RSS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
