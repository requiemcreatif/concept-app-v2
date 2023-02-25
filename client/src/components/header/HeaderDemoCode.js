import React from "react";

import styled from "styled-components";
import CodeBlockDemo from "../../pages/dashboard/CodeBlockDemo";

import { motion } from "framer-motion";

const StyledGeneralCode = styled.div`
  margin: 0 auto;
  .card {
    width: 3rem;
    max-width: 90%;
    height: 350px;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    margin: 0.5rem auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 350px;
    }
  }

  .btn-code {
    //height: 5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      .card {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .card-details {
    padding: 5rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;

    h3 {
      border-bottom: 0.5px solid #00afb9;
      padding-bottom: 0.5rem;
      color: #053651;
    }

    .description {
      text-align: left;
    }
  }
  .language-div {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: #fff;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 25px;
      width: 4rem;
      height: 4rem;
    }

    .javaScript {
      background-color: #00afb9;
    }
  }

  .status {
    font-size: 1.2rem;
  }

  .copyIcon {
    display: flex;
    justify-content: flex-end;

    padding: 0 1rem;
    cursor: pointer;
  }
`;

const codeDemo = {
  title: "What is a High Order Function in JavaScript?",
  description:
    "A high order function is a function that takes one or more functions as arguments, or returns a function as a result. High order functions are an important part of functional programming and allow for powerful abstractions.",
  code: `function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function calculate(x, y, operation) {
    return operation(x, y);
  }
  
  let result = calculate(2, 3, add); // 5`,
};

const HeaderDemoCode = ({ code, setCode }) => {
  console.log("this is the code:", code);
  return (
    <StyledGeneralCode>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        type="button"
        className="btn-code">
        <CodeBlockDemo>{codeDemo.code}</CodeBlockDemo>
      </motion.button>
    </StyledGeneralCode>
  );
};

export default HeaderDemoCode;
