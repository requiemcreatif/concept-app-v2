import React from "react";
import styled from "styled-components";
import { BiArrowToRight } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { useAppContext } from "../../context/appContext";

const StyledLoginBtn = styled.div`
  #loginBtn {
    background-color: #297ae8;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 3rem;

    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

const style = {
  color: "#fff",
  fontSize: "2rem",
};

const LoginBtn = ({ toggleLogout }) => {
  const { user } = useAppContext();
  return (
    <StyledLoginBtn>
      <button id="loginBtn" onClick={toggleLogout}>
        {user?.name} <MdOutlineLogout style={style} />
      </button>
    </StyledLoginBtn>
  );
};

export default LoginBtn;
