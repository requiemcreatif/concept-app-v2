import React, { useEffect } from "react";
//import InputForm from "../../components/registerComponents/InputForm";
//import FormSelectOptions from "../../components/FormSelectOptions";
import AlertMessage from "../../components/AlertMessage";
import { useAppContext } from "../../context/appContext";
import TextFormInput from "../../components/registerComponents/TextFormInput";
//import CodeBlock from "../../pages/dashboard/CodeBlock";
//import Styled from "styled-components";
import "../advancedSearch/advancedSearch.css";

const AddAiCodes = ({
  displayedCode,
  handleSave,
  handleCopy,
  copy,
  errorMessage,
  handleJsonInput,
  handleSubmitAi,
}) => {
  const {
    isLoading,
    // handleChange,
    // displayAlert,
    showAlert,
    isEdit,
    title,
    description,
    code,
    codeStatus,
    language,
    // clearFormValues,
    createCode,
    editCode,
  } = useAppContext();

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
    // <div className="aiForm">
    <form className="addAi">
      {/* <h3> Add code</h3> */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {showAlert && <AlertMessage />}
      <TextFormInput
        type="text"
        //name="json"
        value={displayedCode}
        handlerChange={handleJsonInput}
      />
    </form>
    // </div>
  );
};

export default AddAiCodes;
