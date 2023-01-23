import React from "react";
import styled from "styled-components";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const TopWrapper = styled.div`
  width: 800px;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  //gap: 1rem;
  @media (max-width: 600px) {
    width: 400px;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const StyledTopFilter = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  //background-color: #000;
  @media (max-width: 600px) {
    width: 400px;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  button {
    background-color: #fff;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 8px;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ease-out;
      color: #fff;
      box-shadow: inset 200px 0 200px 0 #54b3d6;
      border-radius: 5px;
    }
  }
`;

const TopFilter = ({ handleFilterChange, selectedLanguage }) => {
  const handleLanguageClick = (language) => {
    handleFilterChange(language);
  };

  return (
    <TopWrapper>
      <SlArrowLeft />
      <StyledTopFilter>
        <button
          onClick={() => handleLanguageClick("All")}
          className={selectedLanguage === "All" ? "selected" : ""}>
          All
        </button>
        <button
          onClick={() => handleLanguageClick("HTML")}
          className={selectedLanguage === "HTML" ? "selected" : ""}>
          HTML
        </button>
        <button
          onClick={() => handleLanguageClick("JavaScript")}
          className={selectedLanguage === "JavaScript" ? "selected" : ""}>
          JavaScript
        </button>
        <button
          onClick={() => handleLanguageClick("React")}
          className={selectedLanguage === "React" ? "selected" : ""}>
          React
        </button>
        <button
          onClick={() => handleLanguageClick("css")}
          className={selectedLanguage === "css" ? "selected" : ""}>
          css
        </button>
        <button
          onClick={() => handleLanguageClick("Node")}
          className={selectedLanguage === "Node" ? "selected" : ""}>
          Node
        </button>
        <button
          onClick={() => handleLanguageClick("Express")}
          className={selectedLanguage === "Express" ? "selected" : ""}>
          Express
        </button>
      </StyledTopFilter>
      <SlArrowRight />
    </TopWrapper>
  );
};

export default TopFilter;
