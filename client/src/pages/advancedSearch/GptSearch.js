import React, { useState } from "react";
import CodeBlock from "../dashboard/CodeBlock";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import "../../App.css";

const Div = styled.div`
  margin: 0 auto;
  max-width: 100rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

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
    max-width: 100rem;
    width: 60%;
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
    //width: 100%;
    height: 8rem;
    box-shadow: 0 0 0.5rem #0001;

    &:focus {
      outline: none;
    }
  }
`;

const API_URL = "/gpt/gptchat";

const GptChat = () => {
  const [input, setInput] = useState("");
  const [gpt, setGpt] = useState([
    {
      user: "Astro",
      message: "Hello, how are you?",
    },
    {
      user: "me",
      message: "I'm good, how are you?",
    },
  ]);

  const clear = () => {
    setGpt([]);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    //console.log(input);
    let chatGpt = [...gpt, { user: "me", message: `${input}` }];
    setInput("");
    setGpt(chatGpt);

    const messages = chatGpt.map((message) => message.message).join("\n");

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
    await setGpt([...chatGpt, { user: "Astro", message: `${data.message}` }]);
    console.log("Astro:", data.message);
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
            <p>{r.message}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          type="submit"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
          <button type="button" className="clear  btn" onClick={clear}>
            Clear
          </button>
        </div>
      </form>
    </Div>
  );
};

export default GptChat;
