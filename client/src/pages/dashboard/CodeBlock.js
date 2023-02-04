import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

function CodeBlock({ children, language = "javascript" }) {
  return (
    <div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          backgroundColor: "#1d293b",
          fontSize: "1.2rem",
          fontFamily: "monospaced",
          wordSpacing: "0rem",
        }}
        wrapLongLines={true}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
