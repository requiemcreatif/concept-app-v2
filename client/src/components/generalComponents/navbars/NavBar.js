import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import LoginBtn from "../logBtns/LoginBtn";
import LogoutBtn from "../logBtns/LogoutBtn";
import { useAppContext } from "../../../context/appContext";

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  //box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  //background-color: #e3e2df;
  margin: 0 auto;
  padding: 1rem 3rem;

  @media (max-width: 600px) {
    padding: 1rem 4rem;
  }

  nav {
    padding: 1rem;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    align-items: center;
    justify-content: space-between;
    //gap: 2rem;
    width: 100%;
    transition: all 0.5s ease-in-out;

    .smallMenuBar {
      display: none;

      @media (max-width: 600px) {
        display: block;
      }
    }

    button {
      background-color: transparent;
      border: none;

      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  .btn-wapper {
    display: flex;
    gap: 1rem;
  }
`;

const style = {
  color: "#053651",

  fontSize: "3.5rem",
};

const NavBar = ({ showSidebar, showSmallMenu }) => {
  const { logoutUser } = useAppContext();

  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  const toggleLogout = () => {
    console.log("toggleLogout: isLogoutVisible: ");
    setIsLogoutVisible(!isLogoutVisible);
  };

  return (
    <StyledNavBar className="navbar">
      <nav>
        <button onClick={showSidebar}>
          <AiOutlineMenu style={style} />
        </button>
        <button className="smallMenuBar" onClick={showSmallMenu}>
          <AiOutlineMenu style={style} />
        </button>
        {/* <div>
          <label className="switch">
            <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div> */}
        <div className="btn-wapper">
          <LoginBtn toggleLogout={toggleLogout} />
          {isLogoutVisible && <LogoutBtn logoutUser={logoutUser} />}
        </div>
      </nav>
    </StyledNavBar>
  );
};

export default NavBar;
