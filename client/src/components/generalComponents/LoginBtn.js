import React from "react";
import styled from "styled-components";

const StyledLoginBtn = styled.div`
  #loginBtn {
    background-color: #297ae8;
    //background-color: #000;
    padding: 0.9rem 3.5rem;

    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

const LoginBtn = () => {
  return (
    <StyledLoginBtn>
      <button id="loginBtn">Login</button>
    </StyledLoginBtn>
  );
};

export default LoginBtn;
