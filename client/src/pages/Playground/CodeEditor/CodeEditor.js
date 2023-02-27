import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import styled from "styled-components";
import "./CodeEditor.css";

const CodeEditor = ({ value, onChange, options = {}, containerStyle = {}, editorStyle = {} }) => {
  return (
    <div style={containerStyle}>
      <CodeMirror
        value={value}
        onBeforeChange={(editor, data, value) => {
          onChange(value);
        }}
        options={{
          mode: "xml",
          theme: "material",
          lineNumbers: true,
          ...options,
          smartIndent: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
