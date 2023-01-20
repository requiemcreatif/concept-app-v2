import React from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import styled from "styled-components";
//dotenv.config();

const AdvanceResearch = () => {
  const configuration = new Configuration({
    organization: "org-bE3vnxyaksA6Km344Pgi1pS7",
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log(process.env.OPENAI_API_KEY);
  //const openai = new OpenAIApi(configuration);
  //const response = openai.listEngines();
  return <div>AdvanceResearch</div>;
};

export default AdvanceResearch;
