import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ children, language = "javascript" }) {
  return (
    <div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        //showLineNumbers={true}
        wrapLines={true}
        customStyle={{
          backgroundColor: "#1d293b",
          position: "absolute",
          bottom: "5%",
          left: "5%",
          right: "0",
          width: "90%",
          height: "10rem",
          //padding: "2rem",
          borderRadius: "1rem",
          fontSize: "1.2rem",
          fontFamily: "monospaced",
          wordSpacing: "0rem",
          //className: "code-div",
        }}
        wrapLongLines={true}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
