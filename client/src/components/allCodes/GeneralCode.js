import React from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import { StyledSingleCode } from "../allCodes/SingleCode";

const GeneralCode = ({ title, description, language, code, codeStatus, codeId }) => {
  const { getAllCodes, codes, isLoading, totalCodes } = useAppContext();
  return (
    <StyledSingleCode>
      <div>
        <p>{language}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="code-div">{code}</div>
    </StyledSingleCode>
  );
};

export default GeneralCode;
