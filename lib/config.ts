const websiteUrl = "https://maddhruv.dev";

const config = {
  appLink: websiteUrl,
  host:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : websiteUrl,
  title: "Dhruv Jain",
  siteTitle: "Dhruv Jain | maddhruv",
  description:
    "Dhruv Jain's blog - sharing ideas and knowlege around JavaScript, TypeScript, React and Coding in general.",
  handle: "maddhruv",
};

export default config;
