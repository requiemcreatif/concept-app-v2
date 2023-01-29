import React from "react";
import InputForm from "../../components/registerComponents/InputForm";
import FormSelectOptions from "../../components/FormSelectOptions";
import AlertMessage from "../../components/AlertMessage";
import { useAppContext } from "../../context/appContext";
import TextFormInput from "../../components/registerComponents/TextFormInput";

import Styled from "styled-components";

const WrapperForm = Styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
gap: 2rem;
margin: 5rem auto;
max-width: 1400px;
padding: 2rem;

.add-desc {
  padding: 3rem 1rem;
  h2 {
    text-align: center;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  grid-template-columns: 1fr;
  margin: 0 auto;
}
  //background-color: #fff;
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
input, select {
  padding: 1.5rem;
  //border: none;
  border: 1px solid #9a1750;
  border-radius: 5px;
  background-color: transparent;
  margin-bottom: 2rem;
}



  textarea {
    padding: 1rem;
    border: none;
    margin-bottom: 1rem;
    width: 700px;
  border-bottom: 1px solid #9a1750;
  background-color: transparent;
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

  /* .big-input {
    input {
      width: 1000px;    
      height: 100px;
      max-height: 100%;
    }
  } */


  

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
    margin-top: 2.5rem;
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #9a1750;
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
      <div className="add-desc">
        <h2>Add some codes</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe praesentium facere
          deserunt eius repellat quae provident modi ut ipsam consectetur, vel velit voluptas eos
          beatae fugiat rem, omnis impedit iusto!
        </p>
      </div>
      <form>
        <h3>{isEdit ? "Edit code" : "Add code"}</h3>
        {showAlert && <AlertMessage />}
        {/* <AlertMessage /> */}
        <div className="full-form">
          <div className="short-input">
            {/* TITLE */}
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
              labelText="Status"
              value={codeStatus}
              handlerChange={handleCodeInput}
              list={codeStatusOptions}
            />
          </div>

          <div>
            {/* DESCRIPTION */}
            <TextFormInput
              className="big-input"
              type="text"
              name="description"
              value={description}
              handlerChange={handleCodeInput}
              placeholder="Description"
            />

            {/* CODE */}
            <TextFormInput
              className="big-input"
              type="text"
              name="code"
              value={code}
              handlerChange={handleCodeInput}
            />
          </div>
        </div>

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
