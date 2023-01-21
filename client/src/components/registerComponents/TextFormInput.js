import React from "react";

const TextFormInput = ({ type, labelText, name, value, handlerChange, list, handleCodeInput }) => {
  return (
    <div>
      <div className="form-input">
        <label htmlFor={name}>{labelText || name}</label>
        <textarea type="type" value={value} name={name} onChange={handlerChange} />
      </div>
    </div>
  );
};

export default TextFormInput;
