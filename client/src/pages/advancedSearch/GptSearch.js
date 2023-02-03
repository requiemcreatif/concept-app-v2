import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";

const Div = styled.div`
  max-width: 100rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  //align-items: center;
  justify-items: center;

  .chat-div {
  }

  .gpt-chat {
    padding: 1rem;
    background-color: #1d293b;
    border-radius: 0.5rem;

    h3 {
      border-bottom: 0.1px solid #5cbcf5;
      padding-bottom: 1rem;
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
    background-color: #9a1750;
    border-radius: 0.5rem;

    h3 {
      border-bottom: 0.5px solid #5cbcf5;
      padding-bottom: 1rem;
    }

    p {
      padding: 1rem 0;
      font-size: 1.5rem;
      font-weight: 300;
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
    //box-shadow: 0 0 0.5rem #0001;
    padding: 2rem;
    //color: #8a2140;

    color: #fff;
    //background-color: #20293a;
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

  input {
    padding: 0 1rem;
    //margin: 1rem;
    border: none;
    border-radius: 0.5rem;
    width: 50rem;
    height: 8rem;
    //width: 60%;
  }
`;

const API_URL = "/gpt/gptchat";

const GptSearch = ({ user }) => {
  //const { user } = useAppContext();
  const [input, setInput] = useState("");
  const [gpt, setGpt] = useState([
    {
      gpt: "Astro",
      gptMessage: "Hello, how are you?",
    },
    {
      user: "User",
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
      <h1>Advanced Search</h1>
      <div className="chat">
        {gpt.map((r, index) => (
          <div key={index} className="chat-div">
            {r.gpt && (
              <div className="gpt-chat">
                <h3>{r.gpt}</h3>
                <p>{r.gptMessage}</p>
              </div>
            )}
            {r.user && (
              <div className="user-chat">
                <h3>{r.user}</h3>
                <p>{r.message}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>

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

export default GptSearch;
