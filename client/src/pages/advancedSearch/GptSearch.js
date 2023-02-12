import React, { useState, useEffect } from "react";
import CodeBlockAi from "./codeBlockAi";
import { useAppContext } from "../../context/appContext";
import styled, { keyframes } from "styled-components";
import { requestInstructions } from "./requestInstructions";
import "../../App.css";
import "./advancedSearch.css";
import { MdContentCopy } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import Loading from "./Loading";

//const API_URL = "/gpt/gptchat";
const GptChat = ({ handleCopy, handleSave, copy, code }) => {
  const { user } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [input, setInput] = useState("");
  const [gpt, setGpt] = useState(
    JSON.parse(localStorage.getItem("gptChat")) || [
      {
        user: "Astro",
        message: "My name is Astor, ask me any programming questions I will try to answer it.",
      },
      {
        user: "me",
        message: "I'm good, how are you?",
      },
    ]
  );

  useEffect(() => {
    if (gpt.length > 100) {
      const storedGpt = gpt.slice(gpt.length - 100);
      localStorage.setItem("gptChat", JSON.stringify(storedGpt));
    } else {
      localStorage.setItem("gptChat", JSON.stringify(gpt));
    }
  }, [gpt]);

  const [hiddenInstructions, setHiddenInstructions] = useState(requestInstructions);
  const clear = () => {
    setGpt([]);
    localStorage.removeItem("gptChat");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsMessageSent(true);
    let chatGpt = [...gpt, { user: "me", message: `${input}` }];
    setInput("");
    setGpt(chatGpt);
    const messages = [...hiddenInstructions, ...chatGpt.map((message) => message.message)].join(
      "\n"
    );

    const response = await fetch("/gpt/gptchat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
      }),
    });

    const data = await response.json();
    setGpt([...chatGpt, { user: "Astro", message: `${data.message}` }]);
    setIsLoading(false);
    setIsMessageSent(false);
    console.log("Astro:", data.message);
    console.log(data);
  }

  return (
    <div className="gptSearch">
      <div className="title">
        <h1>Advanced Search</h1>
        <p>
          With the Advanced Search, you can ask questions about any programming concept in natural
          language, and our AI-powered bot, Astro, will provide you with the answers. <br /> Say
          goodbye to scrolling through pages of irrelevant information or sifting through complex
          technical documentation. The Advanced Search allows you to get the information you need,
          in a format that's easy to understand.
        </p>
      </div>
      <div className="chat">
        {gpt.map((r, index) => (
          <div key={index} className={r.user === "me" ? "user-chat" : "gpt-chat"}>
            <h3>{r.user}</h3>
            {r.user === "Astro" && (
              <div className="top-btn">
                <button className="btn-copy" onClick={() => handleCopy(r.message)}>
                  {copy ? "Copied" : <MdContentCopy className="copy" />}
                </button>
                <button className="btn-save">
                  <BiSave className="copy" onClick={() => handleSave(r.message)} />
                </button>
              </div>
            )}
            {r.user === "Astro" ? <CodeBlockAi>{r.message}</CodeBlockAi> : <p>{r.message}</p>}
          </div>
        ))}
        {isLoading && isMessageSent && <Loading />}
        {/* <Loading /> */}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          type="submit"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onPaste={(e) => setInput(e.clipboardData.getData("text"))}
          rows="4"
          cols="50"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <button className="submit btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GptChat;
