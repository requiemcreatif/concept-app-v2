import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
//import SyntaxHighlighter from "react-syntax-highlighter";
import languageMap from "react-syntax-highlighter";
import InputForm from "../../components/InputForm/InputForm";
import FormSelectOptions from "../../components/FormSelectOptions/FormSelectOptions";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import { useAppContext } from "../../context/appContext";
import TextFormInput from "../../components/TextFormInput/TextFormInput";
import "./addcodes.css";

import Styled from "styled-components";

const WrapperForm = Styled.div`

.full-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border: 1px solid #053651;
  border-radius: 1rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  textarea {
    padding: 2rem;
    border: none;
    margin-bottom: 3rem;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    width: 100%;
  }

  .short-input {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .form-input {
    display: flex;
    flex-direction: column;

    input {
      padding: 1.5rem;
      border: none;
      border-radius: 0.5rem;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    label {
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      font-size: 1.2rem;
      font-family: "Montserrat", sans-serif;
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

  const HighlightedCode = (
    <SyntaxHighlighter
      //
      style={oneDark}
      showLineNumbers={true}
      wrapLines={true}
      language={languageMap[language] || ""}
      // style={customStyle}
    >
      {code}
    </SyntaxHighlighter>
  );

  return (
    <WrapperForm className="add-wrapper">
      <div className="add-desc ">
        <h2>Join the Community, Share Your Code</h2>
        <p>
          Concept is more than just a source of information - it's a community of developers working
          together to advance their understanding of programming concepts. That's why we've included
          a user-contributed section where you can share your own code snippets and examples. This
          section allows you to contribute to the growth of our database and provide real-world,
          practical examples for others to learn from. Whether you're a seasoned veteran or just
          starting out, you have something valuable to share. So join us in building a thriving
          community of developers and unlock the full potential of The Concept.
        </p>
      </div>
      <form>
        <h3 className="edit-add global-text">{isEdit ? "Edit code" : "Add code"}</h3>
        {showAlert && <AlertMessage />}
        {/* <AlertMessage /> */}
        <div className="full-form">
          <div className="short-input global-text">
            <InputForm
              type="text"
              name="title"
              value={title}
              handlerChange={handleCodeInput}
              className="title-input short "
            />

            <FormSelectOptions
              name="language"
              labelText="Language"
              value={language}
              handlerChange={handleCodeInput}
              list={languageOptions}
            />
            <FormSelectOptions
              name="codeStatus"
              labelText="Status"
              value={codeStatus}
              handlerChange={handleCodeInput}
              list={codeStatusOptions}
            />
          </div>

          <div className="big-input global-text">
            <TextFormInput
              type="text"
              name="description"
              value={description}
              handlerChange={handleCodeInput}
              placeholder="Description"
            />
            <TextFormInput type="text" name="code" value={code} handlerChange={handleCodeInput} />
            {HighlightedCode}
            {console.log(code)}
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
