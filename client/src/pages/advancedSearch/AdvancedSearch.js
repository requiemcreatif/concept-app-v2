import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/appContext";

import styled from "styled-components";
import GptSearch from "./GptSearch";
import AddAiCodes from "../addCodes/AddAiCodes";

const Div = styled.div`
  padding: 2rem;
  margin: 10rem auto;
  max-width: 1500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
`;

const AdvancedSearch = () => {
  const { user, isLoading } = useAppContext();
  console.log(isLoading);
  const [copy, setCopy] = useState(false);
  const [code, setCode] = useState("");
  const [displayedCode, setDisplayedCode] = useState("");

  const handleSave = (code) => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
    setDisplayedCode(code);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
    console.log("code: ", text);
  };
  return (
    <Div>
      <GptSearch
        user={user}
        code={code}
        displayedCode={displayedCode}
        setDisplayedCode={setDisplayedCode}
        handleSave={handleSave}
        handleCopy={handleCopy}
        copy={copy}
      />
      <AddAiCodes
        user={user}
        code={code}
        displayedCode={displayedCode}
        setDisplayedCode={setDisplayedCode}
        handleSave={handleSave}
        handleCopy={handleCopy}
        copy={copy}
      />
    </Div>
  );
};

export default AdvancedSearch;
