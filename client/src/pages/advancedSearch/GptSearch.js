import React, { useState, useEffect } from "react";
import CodeBlockAi from "./codeBlockAi";

import LoadingAnimation from "../../components/generalComponents/LoadingAnimation";
import AddAiCodes from "../addCodes/AddAiCodes";
import { useAppContext } from "../../context/appContext";
import styled, { keyframes } from "styled-components";
import { requestInstructions } from "./requestInstructions";
import "../../App.css";
import { MdContentCopy } from "react-icons/md";
import { BiSave } from "react-icons/bi";

const Div = styled.div`
  margin: 0 auto;
  max-width: 100rem;
  display: grid;
  grid-template-columns: 1fr;
  //grid-gap: 2rem;
  justify-items: center;

  .title {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 2em;
      font-weight: 700;
      padding: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }

  .gpt-chat {
    padding: 1rem;
    background-color: #1d293b;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #0001;
    h3 {
      border-bottom: 0.1px solid #5cbcf5;
      padding-bottom: 1rem;
      color: #5cbcf5;
    }
    p {
      padding: 1rem 0;
      font-size: 1.5rem;
      font-weight: 300;
      color: #5cbcf5;
    }
  }

  .user-chat {
    padding: 1rem;
    background-color: #1d293b;
    border-radius: 0.5rem;
    h3 {
      border-bottom: 0.5px solid #9a1750;
      padding-bottom: 1rem;
      color: #9a1750;
    }
    p {
      padding: 1rem 0;
      font-size: 1.5rem;
      font-weight: 300;
      color: #fff;
    }
  }

  .chat {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    //max-width: 1rem;
    width: 100%;
    height: auto;
    border: none;
    border-radius: 0.5rem;
    padding: 2rem;
    color: #fff;

    @media (max-width: 768px) {
      width: 100%;
      padding: 2rem 0;
    }
  }

  form {
    display: grid;
    gap: 1rem;
  }
  .top-btn {
    display: flex;
    justify-content: space-between;
  }

  .btn-copy {
    background-color: transparent;
    color: #fff;
    border: none;
    padding: 1rem;
    max-width: 10rem;
    width: 30%;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  .btn-save {
    background-color: transparent;
    color: #fff;
    border: none;
    padding: 1rem;
    max-width: 15rem;
    width: 50%;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  .btn {
    background-color: #9a1750;
    color: #fff;
    border: none;
    padding: 1rem;
    max-width: 10rem;
    width: 30%;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .submit {
  }

  .clear {
  }

  textarea {
    padding: 2rem;
    border: none;
    border-radius: 0.5rem;
    width: 60rem;
    height: 8rem;
    box-shadow: 0 0 0.5rem #0001;

    &:focus {
      outline: none;
    }
  }
`;

//const API_URL = "/gpt/gptchat";
const GptChat = ({ handleCopy, handleSave, copy, code }) => {
  const { user, isLoading } = useAppContext();
  console.log(isLoading);
  const [input, setInput] = useState("");
  console.log(input);
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
    console.log("Astro:", data.message);
    console.log(data);
  }

  return (
    <Div>
      <div className="title">
        <h1>Advanced Search</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor est dolore perferendis
          voluptas eligendi nihil repellat aliquam aspernatur incidunt qui! Possimus aliquam
          doloremque officia deleniti optio nesciunt esse laborum quas.
        </p>
      </div>
      <div className="chat">
        {gpt.map((r, index) => (
          <div key={index} className={r.user === "me" ? "user-chat" : "gpt-chat"}>
            <h3>{r.user}</h3>
            {r.user === "Astro" && (
              <div className="top-btn">
                <button className="btn-copy" onClick={() => handleCopy(r.message)}>
                  {copy ? "Copied" : <MdContentCopy />}
                </button>
                <button className="btn-save">
                  <BiSave onClick={() => handleSave(r.message)} />
                </button>
              </div>
            )}
            {r.user === "Astro" ? <CodeBlockAi>{r.message}</CodeBlockAi> : <p>{r.message}</p>}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
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
        <div className="btns">
          <button className="submit btn" type="submit">
            Submit
          </button>

          <button className="submit btn" type="button" onClick={clear}>
            Clear
          </button>
        </div>
      </form>
    </Div>
  );
};

export default GptChat;
