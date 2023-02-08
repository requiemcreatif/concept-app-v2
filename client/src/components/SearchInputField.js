import React from "react";

import { useState, useEffect } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import { HiMicrophone } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputDiv = styled.div`
  margin: 5rem auto;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  /* Search Input */

  .searchWrapper {
    //background-color: #fff;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    @media (max-width: 768px) {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    }
  }

  .btnStart,
  .btnStop {
    width: 4.5rem;
    height: 4rem;
    border: none;
    border-radius: 50px;
    padding: 0.5rem;
    background-color: #54b3d6;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
      transition: 0.2s ease-in-out;
    }
  }

  .recording {
    background-color: red;
  }
`;

const SearchInputField = ({
  handleSearch,
  clear,
  startHandle,
  stopHandle,
  start,
  listening,
  transcript,
  searchValue,
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(transcript);
  }, [transcript]);

  return (
    <InputDiv>
      <div className="searchInput searchWrapper topSearch search">
        <input
          className="textSearch"
          type="text"
          placeholder="What are you looking for boy?"
          onChange={handleSearch}
          // value={inputValue}
        />
        <button id="buttonSearch" onClick={clear}>
          {/* <FiSearch /> */}
          Clear
        </button>
      </div>

      {listening ? (
        <button className="btnStop" onClick={stopHandle}>
          Stop
        </button>
      ) : (
        <button className="btnStart" onClick={startHandle}>
          <HiMicrophone />
        </button>
      )}
    </InputDiv>
  );
};

export default SearchInputField;
