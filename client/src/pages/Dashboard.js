import { useAppContext } from "../context/appContext";

import { useState, useEffect } from "react";

//import Display from "../components/Display";
import SearchInputField from "../components/SearchInputField";
import TopFilter from "../components/generalComponents/TopFilter";
import GeneralCode from "../components/allCodes/GeneralCode";
import PageBtn from "../components/generalComponents/PageBtn";
import styled, { keyframes } from "styled-components";

const CodeContainer = styled.div`
  margin: 0 auto;
  h3 {
    text-align: center;
  }

  @media (max-width: 768px) {
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
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 2rem auto;
  gap: 2rem;
  //opacity: 0;
  animation: ${fadeIn} 0.3s ease-in;
  //animation-fill-mode: forwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;

const SearchDiv = styled.div`
  //padding: 0 0.5rem;
  //border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  //padding: 1.5rem 0;
  margin: 2rem auto;

  @media (max-width: 768px) {
    background-color: transparent;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
`;

const Dashboard = ({ toggleTheme, isDarkTheme }) => {
  const { getAllCodes, codes, totalCodes, isLoading, numOfPages, page } = useAppContext();
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    getAllCodes(selectedLanguage);
  }, [selectedLanguage, page]);

  const handleFilterChange = (language) => {
    setSelectedLanguage(language);
    getAllCodes(language);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const clear = () => {
    setSearchValue("");
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
    <CodeContainer className="dashboard">
      <SearchDiv className="topSearch">
        <SearchInputField
          clear={clear}
          className="topSearch"
          onSearch={handleSearch}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <TopFilter
          selectedLanguage={selectedLanguage}
          handleFilterChange={handleFilterChange}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
      </SearchDiv>

      <h3>
        {filteredCodes.length} code{filteredCodes.length > 1 && "s"} found
      </h3>
      <StyledCodeDisplay>
        {filteredCodes.map((code) => {
          return (
            <GeneralCode
              key={code._id}
              {...code}
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
          );
        })}
      </StyledCodeDisplay>
      <div>{numOfPages > 1 && <PageBtn />}</div>
    </CodeContainer>
  );
};

export default Dashboard;
