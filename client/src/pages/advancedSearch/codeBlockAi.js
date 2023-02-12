import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

const StyledCodeBlock = styled.div`
  margin: 1rem auto;
  padding: 0 2rem;
  width: 700px;
  height: auto;
  background-color: #1d293b;
  border-radius: 1rem;
  @media (max-width: 768px) {
    width: 380px;
  }
`;

function CodeBlockAi({ children, language = "javascript" }) {
  return (
    <StyledCodeBlock>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        //showLineNumbers={true}

        wrapLines={true}
        customStyle={{
          overflow: "hidden",
          //boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#1d293b",
          //width: "400px",
          height: "auto",
          //padding: "2rem",
          borderRadius: "1rem",
          fontSize: "1.2rem",
          fontFamily: "monospaced",
          //wordSpacing: "0rem",
        }}
        wrapLongLines={true}>
        {children}
      </SyntaxHighlighter>
    </StyledCodeBlock>
  );
}

export default CodeBlockAi;
