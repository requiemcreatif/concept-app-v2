import React, { useState, useEffect } from "react";
import InputForm from "../../components/registerComponents/InputForm";
import FormSelectOptions from "../../components/FormSelectOptions";
import AlertMessage from "../../components/AlertMessage";
import { useAppContext } from "../../context/appContext";
import TextFormInput from "../../components/registerComponents/TextFormInput";
import CodeBlock from "../../pages/dashboard/CodeBlock";
import Styled from "styled-components";
import "../advancedSearch/advancedSearch.css";

const AddAiCodes = ({ displayedCode, handleSave, handleCopy, copy }) => {
  const {
    isLoading,
    handleChange,
    displayAlert,
    showAlert,
    isEdit,
    title,
    description,
    code,
    codeStatus,
    language,
    clearFormValues,
    createCode,
    editCode,
  } = useAppContext();

  const [json, setJson] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleJsonInput = (e) => {
    setJson(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(displayedCode);
      if (!data.title || !data.language || !data.description || !data.code || !data.codeStatus) {
        setErrorMessage("Please provide all the required values.");
        return;
      }
      setErrorMessage(null);
      handleChange({ name: "title", value: data.title });
      handleChange({ name: "language", value: data.language });
      handleChange({ name: "description", value: data.description });
      handleChange({ name: "code", value: data.code });
      handleChange({ name: "codeStatus", value: data.codeStatus });
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid JSON format");
      return;
    }
  };

  useEffect(() => {
    if (title && description && code && codeStatus && language && !isLoading && !errorMessage) {
      if (isEdit) {
        editCode();
      } else {
        createCode();
      }
    }
  }, [
    title,
    description,
    language,
    code,
    codeStatus,
    isEdit,
    isLoading,
    errorMessage,
    editCode,
    createCode,
  ]);

  return (
    <div className="aiForm">
      <form>
        <h3> Add code</h3>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {showAlert && <AlertMessage />}
        <TextFormInput
          className="big-input"
          type="text"
          //name="json"
          value={displayedCode}
          handlerChange={handleJsonInput}
        />

        <div className="btns">
          <button className="btn" type="button" onClick={handleSubmit}>
            Save Code
          </button>
          <button
            type="button"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
            }}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAiCodes;
