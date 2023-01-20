import React from "react";
import styled from "styled-components";

const DivInput = styled.div`
  .form-input {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    label {
      //margin-bottom: 0.5rem;
      text-transform: capitalize;
    }

    input {
      padding: 0.5rem;
      border: none;
      border-radius: 5px;
      outline: none;
    }
  }
`;

const InputForm = ({ type, name, value, handlerChange, labelText, handleCodeInput }) => {
  return (
    <DivInput>
      <div className="form-input">
        <label htmlFor={name}>{labelText || name}</label>
        <input type="type" value={value} name={name} onChange={handlerChange} />
      </div>
    </DivInput>
  );
};

export default InputForm;
