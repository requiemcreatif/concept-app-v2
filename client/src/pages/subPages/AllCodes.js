import React from "react";
import styled from "styled-components";
import NavBar from "../../components/generalComponents/NavBar";
import VoiceRecognitionSearch from "../../components/VoiceRecognitionSearch";
import Display from "../../components/Display";

const AllCodes = ({ input, setInput, search, clear, results, searchPerformed, showResults }) => {
  return (
    <div>
      <NavBar />

      <VoiceRecognitionSearch input={input} setInput={setInput} search={search} clear={clear} />
      {/* <SearchBar input={input} setInput={setInput} search={search} clear={clear} /> */}
      <Display
        clear={clear}
        results={results}
        searchPerformed={searchPerformed}
        showResults={showResults}
        setInput={setInput}
      />
    </div>
  );
};

export default AllCodes;
