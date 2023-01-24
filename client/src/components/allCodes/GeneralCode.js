import React from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";
import { StyledSingleCode } from "../allCodes/SingleCode";

const GeneralCode = ({ title, description, language, code, codeStatus, codeId }) => {
  return (
    <StyledSingleCode className="card">
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
    </StyledSingleCode>
  );
};

export default GeneralCode;
