import React from "react";
import styled, { css } from "styled-components";

const StyledLogouBtn = styled.div`
  #logoutBtn {
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

  /* .outBtn {
    display: none;
  } */
`;

const LogoutBtn = ({ toggleLogout }) => {
  return (
    <StyledLogouBtn>
      <button id="logoutBtn" className="outBtn" onClick={() => console.log("Logout the user boy")}>
        Logout
      </button>
    </StyledLogouBtn>
  );
};

export default LogoutBtn;
