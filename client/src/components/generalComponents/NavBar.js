import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const StyledNavBar = styled.nav`
  background-color: #000;
  margin: 0 auto;
  padding: 2rem 4rem;

  nav {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    align-items: center;
    //justify-content: center;
    width: 100%;
    padding: 0 3rem;

    button {
      background-color: transparent;
      border: none;
    }
  }
`;

const style = {
  color: "#fff",
  fontSize: "3.5rem",
};

const NavBar = ({ showSidebar }) => {
  return (
    <StyledNavBar>
      <nav>
        <button onClick={showSidebar}>
          <AiOutlineMenu style={style} />
        </button>
      </nav>
    </StyledNavBar>
  );
};

export default NavBar;
