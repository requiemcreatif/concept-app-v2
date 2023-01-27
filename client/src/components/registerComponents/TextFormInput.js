import React from "react";

const TextFormInput = ({ type, labelText, name, value, handlerChange, list, handleCodeInput }) => {
  return (
    <div>
      <div className="form-input">
        <label htmlFor={name}>{labelText || name}</label>
        <textarea
          type="type"
          rows="10"
          value={value}
          name={name}
          onChange={handlerChange}
          //placeholder={name}
        />
      </div>
    </div>
  );
};

export default TextFormInput;
