import React, { useState, useEffect } from "react";
import InputForm from "../../components/registerComponents/InputForm";
import FormSelectOptions from "../../components/FormSelectOptions";
import AlertMessage from "../../components/AlertMessage";
import { useAppContext } from "../../context/appContext";
import TextFormInput from "../../components/registerComponents/TextFormInput";
import CodeBlock from "../../pages/dashboard/CodeBlock";
import Styled from "styled-components";

const WrapperForm = Styled.div`
text-align: center;
//background-color: #fff;
display: grid;
grid-template-columns: 1fr;
justify-content: center;
//align-items: center;
gap: 2rem;

form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

.btn-add {
display: flex;
  padding: 1rem;
  gap: 1rem;

  .btn-submit, .btn-clear {
    margin-top: 2.5rem;
    width: 50%;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #9a1750;
    color: #fff;
    cursor: pointer;
  }
  }
  }


.add-desc {
  padding: 3rem 1rem;
  h2 {
    text-align: center;
    padding: 2rem;
  }
}


input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
input, select {
  padding: 1.5rem;
  border: 1px solid #9a1750;
  border-radius: 5px;
  
  margin-bottom: 2rem;
}

textarea {
    padding: 1rem;
    border: none;
    margin-bottom: 1rem;
    width: 700px;
  border-bottom: 1px solid #9a1750;
  background-color: #fff;
  }
 
  .form-input {
    display: flex;
    flex-direction: column;
    //gap: .5rem;

    label {
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      font-size: 1.2rem;
    }
  }

  h3 {
    text-align: center;
    margin-bottom: 2rem;

  }

  
`;

const AddAiCodes = ({ displayedCode }) => {
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

  const handleJsonInput = (e) => {
    setJson(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(displayedCode);
      handleChange({ name: "title", value: data.title });
      handleChange({ name: "description", value: data.description });
      handleChange({ name: "code", value: data.code });
      handleChange({ name: "language", value: data.language });
      handleChange({ name: "codeStatus", value: data.codeStatus });
    } catch (error) {
      console.error(error);
      displayAlert();
    }
  };

  useEffect(() => {
    if (title && description && code && codeStatus && !isLoading) {
      if (isEdit) {
        editCode();
      } else {
        createCode();
      }
    }
  }, [title, description, language, code, codeStatus, isEdit, isLoading, editCode, createCode]);

  return (
    <WrapperForm>
      <form>
        <h3> Add code</h3>
        {showAlert && <AlertMessage />}
        <TextFormInput
          className="big-input"
          type="text"
          //name="json"
          //value={json}
          value={displayedCode}
          handlerChange={handleJsonInput}
        />

        <div className="btn-add">
          <button className="btn-submit" type="submit" onClick={handleSubmit} disabled={isLoading}>
            Submit
          </button>
          <button
            type="button"
            className="btn-clear"
            onClick={(e) => {
              e.preventDefault();
            }}>
            Clear
          </button>
        </div>
      </form>
    </WrapperForm>
  );
};

export default AddAiCodes;
