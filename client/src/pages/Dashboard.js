import { useAppContext } from "../context/appContext";

import { useState, useEffect } from "react";

//import Display from "../components/Display";
import SearchInputField from "../components/SearchInputField";
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
    opacity: 0.5;
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
  //animation-fill-mode: forwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Dashboard = () => {
  const { getAllCodes, codes, totalCodes, isLoading } = useAppContext();
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    getAllCodes(selectedLanguage);
  }, [selectedLanguage]);

  const handleFilterChange = (language) => {
    setSelectedLanguage(language);
    getAllCodes(language);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (codes.length === 0) {
    return <h1>No codes found</h1>;
  }

  const filteredCodes = codes.filter((code) => {
    const searchFields = [code.title, code.description, code.language, code.code];
    return (
      (code.language === selectedLanguage || selectedLanguage === "All") &&
      searchFields.some((field) => field.toLowerCase().includes(searchValue.toLowerCase()))
    );
  });

  return (
    <CodeContainer>
      <TopFilter selectedLanguage={selectedLanguage} handleFilterChange={handleFilterChange} />
      <SearchInputField onSearch={handleSearch} />
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
