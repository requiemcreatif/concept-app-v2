import React from "react";
import axios from "axios";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";

const Div = styled.div`
  margin: 10rem auto;
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
      height: auto;
      width: 1000px;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 5rem 2rem;
      background-color: #000;
      color: #fff;
    }
  }

  .btn-response {
    //display: flex;
    //justify-content: center;
    background-color: #000;
    border: none;
    color: #fff;
    padding: 1.5rem;
    border-radius: 25px;
    margin: 1rem auto;
    width: 300px;
  }
`;

const Advanced = () => {
  //console.log(apiKey);
  const { user } = useAppContext();
  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });
  const [payload, setPayLoad] = useState({
    model: "text-davinci-003",
    prompt: "",
    temperature: 0.8,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
    stop: ["You:"],
  });

  const getRes = () => {
    setLoading(true);
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: payload,
      headers: {
        "Content-Type": "application/json",

        //Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((res) => {
        console.log(res);
        responseHandler(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message, e);
      });
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      setObj(res.data);
      setLoading(false);
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
              obj?.choices?.map((v, index) => <div key={index}>{v.text}</div>)
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
            value={payload.prompt}></textarea>
        </div>
      </div>
      <div>
        <button className="btn-response" disabled={loading} onClick={getRes}>
          {loading ? "Loading... " : "Submit"}
        </button>
      </div>
    </Div>
  );
};

export default Advanced;
