import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlockUser({ children, language = "javascript" }) {
  return (
    <div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          backgroundColor: "#1d293b",
          //   position: "absolute",
          //   bottom: "5%",
          //   left: "5%",
          //   right: "0",
          //width: "90%",
          overflow: "hidden",
          height: "6rem",
          padding: "2rem",
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

export default CodeBlockUser;
