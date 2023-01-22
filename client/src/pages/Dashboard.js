import { useAppContext } from "../context/appContext";

import { useState, useEffect } from "react";

//import Display from "../components/Display";
//import VoiceRecognitionSearch from "../components/VoiceRecognitionSearch";
import TopFilter from "../components/generalComponents/TopFilter";
import GeneralCode from "../components/allCodes/GeneralCode";
import styled from "styled-components";

const CodeContainer = styled.div`
  margin: 0 auto;
  h3 {
    text-align: center;
  }
`;

const StyledCodeDisplay = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem auto;
  gap: 2rem;
  //opacity: 0;
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Dashboard = () => {
  const { getAllCodes, getCodes, codes, isLoading, totalCodes } = useAppContext();

  useEffect(() => {
    getAllCodes();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (codes.length === 0) {
    return <h1>No codes found</h1>;
  }

  return (
    <CodeContainer>
      <TopFilter />
      <h3>
        {totalCodes} code{codes.length > 1 && "s"} found
      </h3>
      <StyledCodeDisplay>
        {codes.map((code) => {
          return <GeneralCode key={code._id} {...code} />;
        })}
      </StyledCodeDisplay>
    </CodeContainer>
  );
};

export default Dashboard;
