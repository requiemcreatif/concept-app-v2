import { useAppContext } from "../context/appContext";

import { useState, useEffect } from "react";

//import Display from "../components/Display";
import VoiceRecognitionSearch from "../components/VoiceRecognitionSearch";
import TopFilter from "../components/generalComponents/TopFilter";
import GeneralCode from "../components/allCodes/GeneralCode";
import styled, { keyframes } from "styled-components";

const CodeContainer = styled.div`
  margin: 0 auto;
  h3 {
    text-align: center;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledCodeDisplay = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem auto;
  gap: 2rem;
  //opacity: 0;
  animation: ${fadeIn} 0.3s ease-in;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Dashboard = () => {
  const { getAllCodes, getCodes, codes, isLoading, totalCodes } = useAppContext();
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  useEffect(() => {
    getAllCodes(selectedLanguage);
  }, [selectedLanguage]);

  const handleFilterChange = (language) => {
    setSelectedLanguage(language);
    getCodes(language);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (codes.length === 0) {
    return <h1>No codes found</h1>;
  }

  const filteredCodes = codes.filter(
    (code) => code.language === selectedLanguage || selectedLanguage === "All"
  );

  return (
    <CodeContainer>
      <TopFilter selectedLanguage={selectedLanguage} onFilterChange={handleFilterChange} />
      <VoiceRecognitionSearch />
      <h3>
        {filteredCodes.length} code{filteredCodes.length > 1 && "s"} found
      </h3>
      <StyledCodeDisplay>
        {filteredCodes.map((code) => {
          return <GeneralCode key={code._id} {...code} />;
        })}
      </StyledCodeDisplay>
    </CodeContainer>
  );
};

export default Dashboard;
