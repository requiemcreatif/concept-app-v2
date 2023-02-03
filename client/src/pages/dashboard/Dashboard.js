//import { motion } from "framer-motion";
import { useAppContext } from "../../context/appContext";
import { useState, useEffect } from "react";
import SearchInputField from "../../components/SearchInputField";
import TopFilter from "../../components/generalComponents/TopFilter";
import GeneralCode from "./GeneralCode";
import PageBtn from "../../components/generalComponents/PageBtn";
import styled from "styled-components";

const CodeContainer = styled.div`
  padding: 2rem;
  margin: 5vh auto 0 auto;

  h3 {
    text-align: center;
  }

  .counter {
    padding: 2rem;
  }
`;

const Div = styled.div`
  padding: 10rem 2rem;
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SearchDiv = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

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

      <div className="counter">{numOfPages > 1 && <PageBtn />}</div>
      <h3>
        {filteredCodes.length} code{filteredCodes.length > 1 && "s"} found
      </h3>
      <Div className="code-display">
        {filteredCodes.map((code, index) => {
          return (
            <GeneralCode
              key={code._id}
              {...code}
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
          );
        })}
      </Div>
    </CodeContainer>
  );
};

export default Dashboard;
