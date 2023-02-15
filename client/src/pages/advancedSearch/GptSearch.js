import React, { useState, useEffect } from "react";
import CodeBlockAi from "./codeBlockAi";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import { requestInstructions } from "./requestInstructions";
import "../../App.css";
import "./advancedSearch.css";
import { MdContentCopy } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import Loading from "./Loading";
import AddAiCodes from "../addCodes/AddAiCodes";
import { Modal, ModalContent } from "../userCodes/userModal";

// Styled components
const CodeModal = styled.div`
  .modal-btn {
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }

  .save {
    background-color: #9a1750;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 3rem;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
  }

  .cancel {
    background-color: #1f2833;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 2.4rem;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

const Div = styled.div`
  .addAi {
    visibility: hidden;
  }
`;

//const API_URL = "/gpt/gptchat";
const GptChat = ({ handleCopy, handleSave, copy, code, displayedCode, setDisplayedCode }) => {
  const { handleChange } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [input, setInput] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const removeModal = (code) => {
    setModalIsOpen(true);
  };

  const handleClose = () => setModalIsOpen(false);

  const [json, setJson] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleJsonInput = (e) => {
    setJson(e.target.value);
  };

  const handleSubmitAi = (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(displayedCode);
      if (!data.title || !data.language || !data.description || !data.code || !data.codeStatus) {
        setErrorMessage("Please provide all the required values.");
        return;
      }
      setErrorMessage(null);
      handleChange({ name: "title", value: data.title });
      handleChange({ name: "language", value: data.language });
      handleChange({ name: "description", value: data.description });
      handleChange({ name: "code", value: data.code });
      handleChange({ name: "codeStatus", value: data.codeStatus });
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid JSON format");
      return;
    }
  };

  const [gpt, setGpt] = useState(
    JSON.parse(localStorage.getItem("gptChat")) || [
      {
        user: "Astro",
        message: "My name is Astro, ask me any programming questions I will try to answer it.",
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
    <Div>
      {modalIsOpen && (
        <CodeModal>
          <Modal onClick={handleClose} className="show">
            <ModalContent>
              <h3>Do you want to save this code?</h3>
              <div className="modal-btn">
                <button className="save" onClick={handleSubmitAi}>
                  Save
                </button>
                <button className="cancel" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </ModalContent>
          </Modal>
        </CodeModal>
      )}
      <div className="gptSearch ">
        <div className="advanced-title ">
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
                    <BiSave
                      className="copy"
                      onClick={() => {
                        removeModal();
                        handleSave(r.message);
                      }}
                    />
                  </button>
                </div>
              )}
              {r.user === "Astro" ? <CodeBlockAi>{r.message}</CodeBlockAi> : <p>{r.message}</p>}
            </div>
          ))}
          {isLoading && isMessageSent && <Loading />}
          {/* <Loading /> */}
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <textarea
              className="textarea-gpt"
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
        <AddAiCodes
          className="addAi"
          //user={user}
          code={code}
          displayedCode={displayedCode}
          setDisplayedCode={setDisplayedCode}
          handleSave={handleSave}
          handleCopy={handleCopy}
          copy={copy}
          errorMessage={errorMessage}
          handleJsonInput={handleJsonInput}
          handleSubmitAi={handleSubmitAi}
        />
      </div>
    </Div>
  );
};

export default GptChat;
