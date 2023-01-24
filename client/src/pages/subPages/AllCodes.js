import React from "react";
//import { useState } from "react";
import CodeDisplay from "../../components/allCodes/CodeDisplay";
//import CodeSearch from "../../components/allCodes/CodeSearch";
import TopFilter from "../../components/generalComponents/TopFilter";
//import VoiceRecognitionSearch from "../../components/VoiceRecognitionSearch";
//import Display from "../../components/Display";
import styled from "styled-components";
//import { useAppContext } from "../../context/appContext";
//import DeleteConfirm from "../../components/generalComponents/DeleteConfirm";

const StyledAllCodes = styled.div`
  margin: 0 auto;
`;

const AllCodes = ({ _id }) => {
  //const { getCodes, codes, isLoading, totalCodes } = useAppContext();

  return (
    <StyledAllCodes>
      <TopFilter />
      {/* <CodeSearch getCodes={getCodes} codes={codes} isLoading={isLoading} totalCodes={totalCodes} /> */}
      <CodeDisplay />
    </StyledAllCodes>
  );
};

export default AllCodes;
