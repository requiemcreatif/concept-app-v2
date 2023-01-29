import { motion } from "framer-motion";
import { useAppContext } from "../../context/appContext";
import { useState, useEffect } from "react";
import SearchInputField from "../../components/SearchInputField";
import TopFilter from "../../components/generalComponents/TopFilter";
import GeneralCode from "./GeneralCode";
import PageBtn from "../../components/generalComponents/PageBtn";
import CodeModal from "./CodeModal";
import styled, { keyframes } from "styled-components";

const CodeContainer = styled.div`
  //padding: 1rem;
  margin: 6rem auto 0 auto;
  h3 {
    text-align: center;
  }
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  //margin: 2rem auto;

  @media (max-width: 768px) {
    background-color: transparent;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
`;

const Dashboard = ({ toggleTheme, isDarkTheme }) => {
  const {
    getAllCodes,
    codes,
    totalCodes,
    isLoading,
    numOfPages,
    page,
    _id,
    code,
    title,
    language,
    description,
  } = useAppContext();
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

  const classNames = [
    "cardOne cards",
    "cardTwo cards",
    "cardThree cards",
    "cardFour cards",
    "cardFive cards",
    "cardSix  cards",
    "cardSeven  cards",
    "cardEight  cards",
  ];

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

      <div>{numOfPages > 1 && <PageBtn />}</div>
      <h3>
        {filteredCodes.length} code{filteredCodes.length > 1 && "s"} found
      </h3>
      <div className="code-display">
        {filteredCodes.map((code, index) => {
          return (
            <div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className={classNames[index]}
              key={index}>
              <GeneralCode
                key={code._id}
                {...code}
                toggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
              />
            </div>
          );
        })}
      </div>
    </CodeContainer>
  );
};

export default Dashboard;
