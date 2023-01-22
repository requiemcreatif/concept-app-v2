import React from "react";
//import CodeInformation from "../../components/allCodes/CodeInformation";
import CodeDisplay from "../../components/allCodes/CodeDisplay";
import CodeSearch from "../../components/allCodes/CodeSearch";
import TopFilter from "../../components/generalComponents/TopFilter";
//import VoiceRecognitionSearch from "../../components/VoiceRecognitionSearch";
//import Display from "../../components/Display";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";

const StyledAllCodes = styled.div`
  margin: 0 auto;
`;

const AllCodes = ({ input, setInput, search, clear, results, searchPerformed, showResults }) => {
  const { getCodes, codes, isLoading, totalCodes } = useAppContext();
  return (
    <StyledAllCodes>
      <TopFilter />

      {/* <VoiceRecognitionSearch input={input} setInput={setInput} search={search} clear={clear} />

      <Display
        clear={clear}
        results={results}
        searchPerformed={searchPerformed}
        showResults={showResults}
        setInput={setInput}
      /> */}

      <CodeSearch getCodes={getCodes} codes={codes} isLoading={isLoading} totalCodes={totalCodes} />
      <CodeDisplay
      // getCodes={getCodes}
      // codes={codes}
      // isLoading={isLoading}
      // totalCodes={totalCodes}
      />
    </StyledAllCodes>
  );
};

export default AllCodes;
