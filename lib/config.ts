const config = {
  appLink: "https://maddhruv.dev",
  host:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://maddhruv.dev",
  title: "Dhruv Jain",
  description:
    "Dhruv Jain's blog - sharing ideas and knowlege around JavaScript, TypeScript, React and Coding in general.",
  handle: "maddhruv",
};

export default config;
