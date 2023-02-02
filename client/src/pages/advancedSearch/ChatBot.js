import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  margin: 10rem auto;
`;

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/openai", {
        prompt: input,
      });

      setResponse(res.data.response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </Div>
  );
};

export default ChatBot;
