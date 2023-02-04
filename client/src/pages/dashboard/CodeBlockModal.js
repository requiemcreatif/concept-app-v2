import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlockModal({ children, language = "javascript" }) {
  return (
    <div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          backgroundColor: "#1d293b",
          borderRadius: "1rem",
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

export default CodeBlockModal;
