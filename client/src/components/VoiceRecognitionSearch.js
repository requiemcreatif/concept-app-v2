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
  gap: 1rem;
  justify-content: center;
  align-items: center;

  input {
    width: 30rem;
    height: auto;
    padding: 1rem;
    //border: 0.5px solid black;
    border: none;
    border-radius: 5px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    max-width: 10rem;
    max-height: 4rem;
    //border: 0.5px solid black;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;

      transition: 0.2s ease-in-out;
    }
  }
`;

//console.log(DATABASE);

const VoiceRecognitionSearch = ({ search }) => {
  const [input, setInput] = useState("");
  //const [listening, setListening] = useState(false);
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
      search(transcript);
    }
  }, [transcript]);

  return (
    <Wrapper>
      <InputDiv>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button onClick={() => search(input)}>Search</button>

        {!listening ? (
          <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>
            Start Recording
          </button>
        ) : (
          <button onClick={SpeechRecognition.stopListening}>Stop Recording</button>
        )}
      </InputDiv>
    </Wrapper>
  );
};

export default VoiceRecognitionSearch;
