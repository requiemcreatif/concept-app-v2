import React from "react";
//import styled from "styled-components";

const FormSelectOptions = ({ labelText, name, value, handlerChange, list }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{labelText || name}</label>
      <select name={name} value={value} onChange={handlerChange}>
        {list.map((lang, index) => {
          return (
            <option key={index} value={lang}>
              {lang}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelectOptions;
