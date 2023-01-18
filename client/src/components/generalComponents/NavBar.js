import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import LoginBtn from "./LoginBtn";

const StyledNavBar = styled.nav`
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 0 auto;
  padding: 2rem 4rem;

  nav {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 3rem;

    button {
      background-color: transparent;
      border: none;
    }
  }
`;

const style = {
  color: "#297AE8",
  fontSize: "3.5rem",
};

const NavBar = ({ showSidebar }) => {
  return (
    <StyledNavBar>
      <nav>
        <button onClick={showSidebar}>
          <AiOutlineMenu style={style} />
        </button>
        <LoginBtn />
      </nav>
    </StyledNavBar>
  );
};

export default NavBar;
