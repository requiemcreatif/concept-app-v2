import React from "react";
import { useState, useEffect } from "react";
import { InputForm, AlertMessage } from "../components";
import styled from "styled-components";

const StyledRegister = styled.div`
  padding: 2rem;
  border: 1px solid #000;

  width: 400px;
  max-width: 100%;
  height: 400px;
  border-radius: 5px;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 1.5rem 2.5rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .form-input {
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }

  .member-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #000;
    font-size: 1.5rem;
  }
`;

const initialFormState = {
  name: "",
  email: "",
  password: "",
  isRegistered: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialFormState);

  const changeMemberStatus = () => {
    setValues({ ...values, isRegistered: !values.isRegistered });
  };

  const handlerChange = (event) => {
    console.log(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <StyledRegister>
      <form onSubmit={handlerSubmit}>
        <h2> {values.isRegistered ? "Login" : "Register"}</h2>
        {values.showAlert && <AlertMessage />}

        {/* {console.log(values.showAlert)} */}

        {!values.isRegistered && (
          <InputForm
            type="text"
            name="name"
            value={values.name}
            handlerChange={handlerChange}
            labelText="Name"
          />
        )}
        <InputForm
          type="email"
          name="email"
          value={values.email}
          handlerChange={handlerChange}
          labelText="Email"
        />
        <InputForm
          type="password"
          name="password"
          value={values.password}
          handlerChange={handlerChange}
          labelText="Password"
        />
        <button type="submit"> Submit</button>
        <p>
          {values.isRegistered
            ? "How can you stil not be a member?"
            : "I know you're already a member?"}
          <button type="button" className="member-btn" onClick={changeMemberStatus}>
            {" "}
            {values.isRegistered ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </StyledRegister>
  );
};

export default Register;
