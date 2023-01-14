import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  background-color: #000;

  nav {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding: 1rem 4rem;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    width: 20%;
  }

  h1 {
    color: #fff;
  }

  span {
    color: #fff;
    font-size: 1.5em;
    padding-top: 1rem;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <nav>
        <h1>
          Concpt <span>></span>{" "}
        </h1>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </StyledNavBar>
  );
};

export default NavBar;
