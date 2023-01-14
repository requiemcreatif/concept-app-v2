import React from "react";

const InputForm = ({ type, name, value, handlerChange, labelText }) => {
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
