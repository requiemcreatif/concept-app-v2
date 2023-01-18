import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";

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

  .btn-wapper {
    display: flex;
    gap: 1rem;
  }

  /* .outBtn {
    display: none;
  } */
`;

const style = {
  color: "#297AE8",
  fontSize: "3.5rem",
};

const NavBar = ({ showSidebar }) => {
  //toggle Logout button
  // const ShowLogout = () => {
  //   console.log("ShowLogout");
  //   const btn = document.querySelector(".outBtn");
  //   if (btn.style.display === "none") {
  //     btn.style.display = "block";
  //   } else {
  //     btn.style.display = "none";
  //   }
  // };

  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  const toggleLogout = () => {
    console.log("toggleLogout: isLogoutVisible: ");
    setIsLogoutVisible(!isLogoutVisible);
  };

  return (
    <StyledNavBar>
      <nav>
        <button onClick={showSidebar}>
          <AiOutlineMenu style={style} />
        </button>
        <div className="btn-wapper">
          <LoginBtn toggleLogout={toggleLogout} />
          {isLogoutVisible && <LogoutBtn toggleLogout={toggleLogout} />}
        </div>
      </nav>
    </StyledNavBar>
  );
};

export default NavBar;
