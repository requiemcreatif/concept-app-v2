import React from "react";
import { useAppContext } from "../../context/appContext";

const GeneralCode = ({ title, description, language, code, codeStatus, codeId }) => {
  const { getAllCodes, codes, isLoading, totalCodes } = useAppContext();
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{language}</p>
      <p>{code}</p>
      <p>{codeStatus}</p>
    </div>
  );
};

export default GeneralCode;
