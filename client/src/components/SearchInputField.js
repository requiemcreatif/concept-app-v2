import React from "react";
//import { useState, useEffect } from "react";
//import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
//import { HiMicrophone } from "react-icons/hi";
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
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
  }

  input {
    width: 40rem;
    height: auto;
    padding: 1.5rem 1.5rem;
    border: none;
    outline: none;
    font-size: 1.4rem;
    background-color: transparent;

    @media (max-width: 768px) {
      border-radius: 25px;
      width: 30rem;
    }
  }

  .searchInput {
    display: flex;

    @media (max-width: 768px) {
      width: 100%;
      background-color: #fff;
    }
  }

  #buttonSearch {
    border: none;
    padding: 0.5rem;
    background-color: transparent;
    color: #9a1750;
    cursor: pointer;

    @media (max-width: 768px) {
      border-radius: 0 25px 25px 0;
    }
  }
  .btnStart,
  .btnStop {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 25px;
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

const SearchInputField = ({ onSearch, toggleTheme, isDarkTheme, setSearchValue, clear }) => {
  //const { transcript, startListening, resetTranscript } = useSpeechRecognition();

  return (
    <InputDiv>
      <div className="searchInput searchWrapper topSearch">
        <input
          className="textSearch"
          type="text"
          placeholder="What are you looking for?"
          onChange={onSearch}
        />
        <button id="buttonSearch" onClick={clear}>
          {/* <FiSearch /> */}
          Clear
        </button>
      </div>

      {/* <button className="btnStart" onClick={() => console.log("start")}>
            <HiMicrophone />
          </button> */}

      {/* <button className="btnStop" onClick={() => console.log("stop")}>
            Stop
          </button> */}
    </InputDiv>
  );
};

export default SearchInputField;
