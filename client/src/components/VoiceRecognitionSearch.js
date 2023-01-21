import React from "react";
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { HiMicrophone } from "react-icons/hi";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputDiv = styled.div`
  margin: 5rem auto;
  display: flex;
  //flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  /* Search Input */

  input {
    width: 40rem;
    height: auto;
    padding: 1.4rem 1.5rem;
    border: none;
    border-radius: 25px 0 0 25px;
    outline: none;
    font-size: 1.4rem;
  }

  .searchInput {
    display: flex;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  #buttonSearch {
    border: none;
    border-radius: 0 25px 25px 0;
    padding: 1rem 1.5rem;
    background-color: #54b3d6;
    color: #fff;
    cursor: pointer;
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

//console.log(DATABASE);

const VoiceRecognitionSearch = ({ search }) => {
  const [input, setInput] = useState("");
  //const [listening, setListening] = useState(false);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
      search(transcript);
    }
  }, [transcript]);

  return (
    <Wrapper>
      <InputDiv>
        <div className="searchInput">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <button
            id="buttonSearch"
            onClick={() => {
              search(input);
              setInput("");
              resetTranscript();
            }}>
            Search
          </button>
        </div>

        <div>
          {!listening ? (
            <button
              className="btnStart"
              onClick={() => SpeechRecognition.startListening({ continuous: true, lang: "en-US" })}>
              <HiMicrophone />
            </button>
          ) : (
            <button className="btnStop recording" onClick={SpeechRecognition.stopListening}>
              Stop
            </button>
          )}
        </div>
      </InputDiv>
    </Wrapper>
  );
};

export default VoiceRecognitionSearch;
