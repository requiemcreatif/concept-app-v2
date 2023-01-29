import React from "react";
import { useState, useEffect } from "react";

const AdvancedSearch = () => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    { user: "ai", message: "Hello how are you boy ?" },
    { user: "me", message: "what is react ?" },
  ]);

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: chatLog.map((message) => message.message).join("") + input,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Advanced Search</h1>

      <div>
        {chatLog.map((message, index) => (
          <Advanced key={index} message={message} />
        ))}
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="search"
          id="search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;

export const Advanced = ({ message }) => {
  return (
    <div>
      <p>{message.user}</p>
      <p>{message.message}</p>
    </div>
  );
};
