import React from "react";
import InputForm from "../../components/registerComponents/InputForm";
import FormSelectOptions from "../../components/FormSelectOptions";
import AlertMessage from "../../components/AlertMessage";
import { useAppContext } from "../../context/appContext";

import Styled from "styled-components";

const WrapperForm = Styled.form`
  margin: 5rem auto;
  border-radius: 10px;
  max-width: 1000px;
  padding: 2rem;
  //background-color: #fff;

  .big-input {
    width: 100%;
  }

  .short-input {
    display: flex;
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
  display: flex;
  padding: 1rem;
  gap: 1rem;
  //justify-content: space-between;

  .btn-submit, .btn-clear {
    //margin: 1rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
  
}



  }


`;

const AddCodes = () => {
  const {
    displayAlert,
    showAlert,
    isEdit,
    editCodeId,
    title,
    description,
    code,
    language,
    codeStatus,
    codeStatusOptions,
  } = useAppContext();

  const handleCodeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("submit");
    if (!title || !description || !code) {
      displayAlert(); // change to displayAlert()
      return;
    }
    console.log("Code created");
  };

  return (
    <WrapperForm>
      <form>
        <h3>{isEdit ? "Edit code" : "Add code"}</h3>
        {showAlert && <AlertMessage />}
        {/* TITLE */}
        <div className="short-input">
          <InputForm type="text" name="title" value={title} handlerChange={handleCodeInput} />
          {/* LANGUAGE */}
          <FormSelectOptions
            name="language"
            value={language}
            handlerChange={handleCodeInput}
            list={language}
          />
          {/* CODE STATUS */}
          <FormSelectOptions
            name="codeStatus"
            labelText="Status"
            value={codeStatus}
            handlerChange={handleCodeInput}
            list={codeStatusOptions}
          />
        </div>

        <div className="big-input">
          <InputForm
            type="text"
            name="description"
            value={description}
            handlerChange={handleCodeInput}
          />
          {/* CODE */}
          <InputForm type="text" name="code" value={code} handlerChange={handleCodeInput} />
        </div>

        {/* DESCRIPTION */}

        <div className="btn-add">
          <button className="btn-submit" type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn-clear">Clear</button>
        </div>
      </form>
    </WrapperForm>
  );
};

export default AddCodes;
