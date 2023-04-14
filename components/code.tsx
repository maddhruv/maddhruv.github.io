import MonacoEditor from "@monaco-editor/react";
import { useState } from "react";
import dynamic from "next/dynamic";

const DEFAULT_LANGUAGE = "typescript";

const DefaultEditor = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    // additional prism syntaxes
    await Promise.all([import("prismjs/components/prism-yaml.js")]);
    return m.Code;
  })
);

export const Code = (props) => {
  const { block } = props;
  const [editorHeight, setEditorHeight] = useState(100);

  const language = (
    block.properties?.language?.[0]?.[0] || DEFAULT_LANGUAGE
  ).toLowerCase();

  const isLiveEditor =
    block.properties?.caption?.[0]?.[0]?.includes("live") || false;

  const content = block.properties?.title?.[0]?.[0] || "";

  function handleEditorDidMount(editor) {
    setEditorHeight(Math.min(1000, editor.getContentHeight()) + 15);
  }

  if (!isLiveEditor) {
    delete block.properties?.caption;
    return <DefaultEditor {...props} />;
  }

  return (
    <MonacoEditor
      height={`${editorHeight}px`}
      language={language}
      value={content}
      theme="vs-dark"
      onMount={handleEditorDidMount}
      options={{
        minimap: { enabled: false },
      }}
    />
  );
};
