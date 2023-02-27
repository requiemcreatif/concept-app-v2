import React, { useState } from "react";
import CodeEditor from "./CodeEditor/CodeEditor";
import "./Playground.css";

const Playground = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  const handleHtmlChange = (newHtml) => {
    setHtml(newHtml);
  };

  const handleCssChange = (newCss) => {
    setCss(newCss);
  };

  const htmlWithStyles = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;

  return (
    <div className="playground">
      <h1>Interactive Coding Game</h1>
      <div style={{ display: "flex" }}>
        <CodeEditor
          className="code-editor"
          value={html}
          onChange={handleHtmlChange}
          options={{ mode: "xml" }}
          containerStyle={{ flex: 1 }}
          editorStyle={{ height: "300px" }}
        />
        <CodeEditor
          className="code-editor"
          value={css}
          onChange={handleCssChange}
          options={{ mode: "css" }}
          containerStyle={{ flex: 1 }}
          editorStyle={{ height: "300px" }}
        />
      </div>
      <iframe srcDoc={htmlWithStyles} title="Preview" />
    </div>
  );
};

export default Playground;
