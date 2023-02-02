import React from "react";
import axios from "axios";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";

const Div = styled.div`
  margin: 5rem auto;
  max-width: 1000px;
  .container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto;

    .textarea-div {
      width: 1000px;
      textarea {
        width: 100%;
        height: 200px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: none;
      }
    }

    .response-div {
      height: 200px;
      width: 1000px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
    }
  }

  .btn-response {
    display: flex;
    justify-content: center;
    background-color: #000;
    border: none;
    color: #fff;
    padding: 1.5rem;
    border-radius: 5px;
    margin: 1rem auto;
    width: 400px;
  }
`;

const Advanced = () => {
  const { user } = useAppContext();
  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });
  const [payload, setPayLoad] = useState({
    prompt: `${user}: What is the difference between var and let in JavaScript?`,

    temperature: 0.5,
    n: 1,
    model: "text-babbage-001",
  });

  const getRes = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: "POST",
        url: "https://api.openai.com/v1/completions",
        data: payload,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
        },
      });

      responseHandler(res);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      setObj(res.data);
      setLoading(false);
    } else {
      console.error(`Unexpected response from API: ${res.status}`);
    }
  };
  return (
    <Div>
      <div className="container">
        <div className="response-div">
          <div>
            {loading ? (
              <span>loading...</span>
            ) : (
              obj?.choices?.map((v, i) => <div key={i}>{v.text}</div>)
            )}
          </div>
        </div>
        <div className="textarea-div">
          <textarea
            type="text"
            placeholder="Enter Text"
            readOnly={loading}
            onChange={(e) => {
              setPayLoad({
                ...payload,
                prompt: e.target.value,
              });
            }}
            value={payload.prompt}
          />
        </div>
      </div>
      <div>
        <button className="btn-response" disabled={loading} onClick={getRes}>
          {loading ? "Loading... " : "Get resposne"}
        </button>
      </div>
    </Div>
  );
};

export default Advanced;
