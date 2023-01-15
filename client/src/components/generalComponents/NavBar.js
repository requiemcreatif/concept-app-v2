import React from "react";
import styled from "styled-components";
import conceptLogo from "../../images/concept-logo-white.svg";

const StyledNavBar = styled.nav`
  background-color: #000;

  .concept-logo {
    width: 12rem;
  }

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
        <img src={conceptLogo} alt="Concept Logo" className="concept-logo" />
        <ul>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </StyledNavBar>
  );
};

export default NavBar;
