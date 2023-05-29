const websiteUrl = "www.maddhruv.dev"; // to be used as host filtering in pageView API

const config = {
  host:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : websiteUrl,
  title: "Dhruv Jain",
  siteTitle: "Dhruv Jain | maddhruv",
  description:
    "Dhruv Jain's blog - sharing ideas and knowlege around JavaScript, TypeScript, React and Coding in general.",
  handle: "maddhruv",
  keywords: [
    "dhruv jain",
    "dhruvjain",
    "maddhruv",
    "dhruv jain blog",
    "maddhruv blog",
    "dhruv",
    "react",
    "javascript",
    "typescript",
    "coding",
    "snippets",
    "blog",
    "nextjs",
  ],
};

export default config;
