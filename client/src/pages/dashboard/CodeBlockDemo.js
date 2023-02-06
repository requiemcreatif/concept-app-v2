import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

const StyledCodeBlock = styled.div`
  margin: 0 auto;
  width: 500px;

  @media (max-width: 768px) {
    width: 380px;
  }
`;

function CodeBlockDemo({ children, language = "javascript" }) {
  return (
    <StyledCodeBlock>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers={true}
        wrapLines={true}
        customStyle={{
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
          //backgroundColor: "#1d293b",
          //width: "400px",
          //height: "40rem",
          //padding: "2rem",
          borderRadius: "1rem",
          fontSize: "1.2rem",
          fontFamily: "monospaced",
          wordSpacing: "0rem",
        }}
        wrapLongLines={true}>
        {children}
      </SyntaxHighlighter>
    </StyledCodeBlock>
  );
}

export default CodeBlockDemo;
