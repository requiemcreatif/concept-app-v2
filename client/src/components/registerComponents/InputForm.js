import React from "react";
import styled from "styled-components";

const InputForm = ({ type, name, value, handlerChange, labelText, handleCodeInput }) => {
  return (
    <div>
      <div className="form-input">
        <label htmlFor={name}>{labelText || name}</label>
        <input type="type" value={value} name={name} onChange={handlerChange} />
      </div>
    </div>
  );
};

export default InputForm;
