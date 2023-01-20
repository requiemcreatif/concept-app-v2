import React from "react";
import styled from "styled-components";

const Div = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormSelectOptions = ({ labelText, name, value, handlerChange, list }) => {
  return (
    <Div>
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
    </Div>
  );
};

export default FormSelectOptions;
