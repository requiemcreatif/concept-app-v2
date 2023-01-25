import React from "react";
import InputForm from "../../components/registerComponents/InputForm";
import FormSelectOptions from "../../components/FormSelectOptions";
import AlertMessage from "../../components/AlertMessage";
import { useAppContext } from "../../context/appContext";
import TextFormInput from "../../components/registerComponents/TextFormInput";

import Styled from "styled-components";

const WrapperForm = Styled.div`
  margin: 5rem auto;
  border-radius: 10px;
  max-width: 1000px;
  padding: 2rem;
  //background-color: #fff;
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
  .short-input {
    width: 700px;
    //max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    input {
    padding: 1rem ;
    border: none;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  select {
    padding: 0.9rem;
    border: none;
    border-radius: 5px;
   
  }


  }

  textarea {
    padding: 1rem;
    border: none;
    border-radius: 5px;
    margin-bottom: 1rem;
    width: 700px;
  }

 
  .form-input {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
      text-transform: capitalize;
    }
  }

  .big-input {
    input {
      width: 1000px;
      
      //max-width: 100%;
      
      height: 100px;
      max-height: 100%;
    }
  }


  

  h3 {
    text-align: center;
    margin-bottom: 2rem;

  }

  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

.btn-add {
  width: 720px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  gap: 1rem;
  //justify-content: space-between;

  .btn-submit, .btn-clear {
    margin-top: 2rem;
    padding: 1.5rem 2rem;
    border: none;
    border-radius: 5px;
    background-color: #297ae8;
    color: #fff;
    cursor: pointer;
  }
  }
  }
`;

const AddCodes = () => {
  const {
    isLoading,
    handleChange,
    displayAlert,
    showAlert,
    isEdit,
    title,
    description,
    code,
    language,
    languageOptions,
    codeStatus,
    codeStatusOptions,
    clearFormValues,
    createCode,
    editCode,
  } = useAppContext();

  const handleCodeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !code) {
      displayAlert();
      return;
    }
    if (isEdit) {
      editCode();
      return;
    }
    createCode();
  };

  return (
    <WrapperForm>
      <form>
        <h3>{isEdit ? "Edit code" : "Add code"}</h3>
        {showAlert && <AlertMessage />}
        {/* <AlertMessage /> */}
        {/* TITLE */}
        <div className="short-input">
          <InputForm type="text" name="title" value={title} handlerChange={handleCodeInput} />
          {/* LANGUAGE */}
          <FormSelectOptions
            name="language"
            labelText="Language"
            value={language}
            handlerChange={handleCodeInput}
            list={languageOptions}
          />
          {/* CODE STATUS */}
          <FormSelectOptions
            name="codeStatus"
            //labelText="Status"
            value={codeStatus}
            handlerChange={handleCodeInput}
            list={codeStatusOptions}
          />
        </div>

        <div className="big-input">
          <TextFormInput
            type="text"
            name="description"
            value={description}
            handlerChange={handleCodeInput}
          />
          {/* CODE */}
          <TextFormInput type="text" name="code" value={code} handlerChange={handleCodeInput} />
        </div>

        {/* DESCRIPTION */}

        <div className="btn-add">
          <button className="btn-submit" type="submit" onClick={handleSubmit} disabled={isLoading}>
            Submit
          </button>
          <button
            className="btn-clear"
            onClick={(e) => {
              e.preventDefault();
              clearFormValues();
            }}>
            Clear
          </button>
        </div>
      </form>
    </WrapperForm>
  );
};

export default AddCodes;
