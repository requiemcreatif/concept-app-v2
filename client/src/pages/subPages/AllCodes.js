import React from "react";

import NavBar from "../../components/generalComponents/NavBar";
import TopFilter from "../../components/generalComponents/TopFilter";
import VoiceRecognitionSearch from "../../components/VoiceRecognitionSearch";
import Display from "../../components/Display";
import styled from "styled-components";

const StyledAllCodes = styled.div`
  margin: 0 auto;
`;

const AllCodes = ({ input, setInput, search, clear, results, searchPerformed, showResults }) => {
  return (
    <StyledAllCodes>
      {/* <NavBar /> */}
      <TopFilter />

      <VoiceRecognitionSearch input={input} setInput={setInput} search={search} clear={clear} />
      {/* <SearchBar input={input} setInput={setInput} search={search} clear={clear} /> */}
      <Display
        clear={clear}
        results={results}
        searchPerformed={searchPerformed}
        showResults={showResults}
        setInput={setInput}
      />
    </StyledAllCodes>
  );
};

export default AllCodes;
