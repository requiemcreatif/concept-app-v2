import React from "react";
import { useState, useEffect } from "react";
import { InputForm, AlertMessage } from "../components";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const Wrapper = styled.div`
  padding-top: 15rem;
`;

const StyledRegister = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

  background-color: #fff;
  padding: 1rem;
  //border: 1px solid #000;
  width: 400px;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  form {
    margin-top: 2rem;
  }

  .btn-submit {
    margin-top: 2rem;
    width: 300px;
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
    justify-content: space-between;

    label {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    input {
      padding: 1rem;
      //border: 1px solid #000;
      border: none;
      border-radius: 5px;
      width: 300px;
      background-color: #f1f1f1;
    }
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
    //color: #000;
    color: red;
    font-size: 1.5rem;
  }

  .form-msg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    p {
      font-size: 1.4rem;
      display: flex;
      gap: 0.5rem;
    }
  }
`;

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegistered: true,
  //showAlert: false,
};

const Register = () => {
  //Initial state
  const [values, setValues] = useState(initialState);
  //Global state
  const { isLoading, showAlert, displayAlert, registerUser } = useAppContext();

  //const state = useAppContext();
  //console.log(state);

  const changeMemberStatus = () => {
    setValues({ ...values, isRegistered: !values.isRegistered });
  };

  const handlerChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, isRegistered } = values;
    if (!email || !password || (!isRegistered && !name)) {
      displayAlert();
      return;
    }

    const newUser = { name, email, password };
    if (isRegistered) {
      console.log("You are already registered");
    } else {
      registerUser(newUser);
    }
  };

  return (
    <Wrapper>
      <StyledRegister>
        <form onSubmit={handlerSubmit}>
          <h2> {values.isRegistered ? "LOGIN" : "REGISTER"}</h2>
          {showAlert && <AlertMessage />}
          {/* <AlertMessage /> */}

          {/* {console.log(values.showAlert)} */}

          {!values.isRegistered && (
            <InputForm
              type="text"
              name="name"
              value={values.name}
              handlerChange={handlerChange}
              labelText="Name*"
            />
          )}
          <InputForm
            type="email"
            name="email"
            value={values.email}
            handlerChange={handlerChange}
            labelText="Email*"
          />
          <InputForm
            type="password"
            name="password"
            value={values.password}
            handlerChange={handlerChange}
            labelText="Password*"
          />
          <button className="btn-submit" type="submit" disabled={isLoading}>
            Submit
          </button>
          <div className="form-msg">
            <p>
              {values.isRegistered
                ? "How can you still not be a member?"
                : "I know you're already a member?"}
              <button type="button" className="member-btn" onClick={changeMemberStatus}>
                {values.isRegistered ? "Register" : "Login"}
              </button>
            </p>
          </div>
        </form>
      </StyledRegister>
    </Wrapper>
  );
};

export default Register;
