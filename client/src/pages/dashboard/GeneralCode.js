import React from "react";
import { useAppContext } from "../../context/appContext";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";
import { StyledSingleCode } from "../../components/codeComponents/SingleCode";

const StyledGeneralCode = styled.div`
  //width: 350px;
  margin: 0 auto;
  position: relative;
  color: #00afb9;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 350px;
  padding: 3rem;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  .language {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: left;
  }

  .language-div {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    //padding: 0.5rem 2rem;

    .javaScript {
      background-color: #00afb9;
      padding: 0.5rem 1rem;
    }

    .html {
      background-color: #000;
      padding: 0.5rem 1rem;
    }

    .react {
      background-color: #053651;
      padding: 0.5rem 1rem;
    }
    .node {
      background-color: #9a1750;
      padding: 0.5rem 1rem;
    }
    .express {
      background-color: #c3c6ce;
      padding: 0.5rem 1rem;
    }
    .css {
      background-color: #ff9800;
      padding: 0.5rem 1rem;
    }
  }

  /* .card {
    border: 0.5px solid #c3c6ce;
    transition: cursor 0.5s ease-out;
    overflow: visible;
  } */

  h3 {
    padding: 2rem;
    margin-bottom: 10px;
    font-weight: 400;
    color: #1e6091;
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

  .code-div {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem 0;
    color: #1e6091;
  }
`;

const GeneralCode = ({ title, description, language, code, codeStatus, codeId }) => {
  return (
    <div>
      <StyledGeneralCode className="card">
        <div>
          <div className="language-div">
            {language === "JavaScript" ? (
              <div className="language javaScript">{language}</div>
            ) : language === "React" ? (
              <div className="language react">{language}</div>
            ) : language === "css" ? (
              <div className="language css">{language}</div>
            ) : language === "Node" ? (
              <div className="language node">{language}</div>
            ) : language === "Express" ? (
              <div className="language express">{language}</div>
            ) : (
              <div className="language html">{language}</div>
            )}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="code-div">
          {code}
          <div className="copyIcon">
            <MdContentCopy />
          </div>
        </div>
      </StyledGeneralCode>
    </div>
  );
};

export default GeneralCode;
