import { Code as SyntaxHighlighter } from "bright";

export const Code = (props) => {
  const { value } = props;

  const language = value?.language?.toLowerCase() || "javascript";

  const code = value?.code || "javascript";

  // @ts-expect-error
  return <SyntaxHighlighter lang={language}>{code}</SyntaxHighlighter>;
};
