import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 100rem;
`;

const API_URL = "/gpt/gptchat";

const GptChat = () => {
  const [input, setInput] = useState("");
  const [gpt, setGpt] = useState([
    {
      user: "gpt-3",
      message: "Hello, how are you?",
    },
    {
      user: "user",
      message: "I'm good, how are you?",
    },
  ]);

  const clear = () => {
    setGpt([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messages = [...gpt, { user: "user", message: input }];
    setInput("");
    setGpt(messages);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messages.map((message) => message.message).join("\n"),
        }),
      });

      const data = await response.json();
      setGpt([...messages, { user: "gpt-3", message: data.message }]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Div>
      <h1>Astro Search</h1>
      <div>
        {gpt.map((r, index) => (
          <div key={index}>
            <h3>{r.user}</h3>
            <p>{r.message}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={clear}>Clear</button>
    </Div>
  );
};

export default GptChat;
