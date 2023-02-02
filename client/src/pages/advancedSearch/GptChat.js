import React from "react";
import { useAppContext } from "../../context/appContext";

const GptChat = () => {
  const { createGpt3Code, message } = useAppContext();

  return (
    <div>
      <h1>GPT-3 Chat</h1>
      <p>{message}</p>

      <button onClick={createGpt3Code}>Click</button>
    </div>
  );
};

export default GptChat;
