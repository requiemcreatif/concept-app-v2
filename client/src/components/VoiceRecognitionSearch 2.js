import React from "react";
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

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
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  /* Search Input */

  input {
    width: 40rem;
    height: auto;
    padding: 1rem;
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
  }

  .searchInput {
    display: flex;
  }

  #buttonSearch {
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 1rem;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  .btnStart,
  .btnStop {
    border: none;
    border-radius: 5px;
    padding: 1rem;
    background-color: #000;
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
            placeholder="Search"
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
              Start
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
