import React from "react";
import { useAppContext } from "../../context/appContext";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";
import { StyledSingleCode } from "../../components/codeComponents/SingleCode";

const StyledGeneralCode = styled.div`
  //width: 400px;
  color: #00afb9;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  //background-color: #000;
  border-radius: 10px;
  //width: 375px;
  height: 400px;
  padding: 3rem;
  text-align: center;
  margin-bottom: 20px;
  //width: 350px;
  //height: 400px;

  .card {
    //position: relative;
    border: 0.5px solid #c3c6ce;
    transition: cursor 0.5s ease-out;
    overflow: visible;
  }

  .card&:hover {
    //border-color: #053651;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    /* transition: box-shadow 0.5s ease-out 0.5s, scale 0.5s ease-in, opacity 0.5s ease-out;

    scale: 1.05;
    opacity: 1; */

    cursor: pointer;
  }

  .language {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: left;
  }

  h3 {
    padding: 2rem;
    margin-bottom: 10px;
    font-weight: 400;
    color: #1e6091;
  }

  .btn-delete {
    background-color: #9a1750;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }

  .edit {
    text-decoration: none;
    font-size: 1.2rem;
    border: 1px solid #00afb9;
    padding: 0.6rem 2rem;
    border-radius: 8px;
    background-color: #00afb9;
    color: #fff;
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
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
      <StyledGeneralCode className="card">
        <div>
          <p className="language">{language}</p>
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
    </motion.div>
  );
};

export default GeneralCode;