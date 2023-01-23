import React from "react";
import { NavLink } from "react-router-dom";
import {} from "react-router-dom";

import styled from "styled-components";

import { SiElasticsearch } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { IoAddCircleOutline, IoTrophyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsCodeSlash } from "react-icons/bs";

const SideBarDiv = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    //box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    //background-color: #fff;

    .side-container {
      position: fixed;
      //background-color: #fff;
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: all 0.5s ease-in-out;
      //border-right: 1px solid #54b3d6;
    }
    .content {
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      padding: 4.1rem 1rem;
      gap: 10rem;
    }
    .show-sidebar {
      margin-left: 0;
      transition: all 0.5s ease-in;
    }

    .nav-links {
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
    }

    .link {
      //////
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      color: #9a1750;
      transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out padding 0.3s ease-in-out;
    }
    .link:hover {
      padding-left: 3rem;
      transition: all 0.5s ease-out;
      color: #fff;
      box-shadow: inset 200px 0 200px 0 #54b3d6;
      border-radius: 5px;
    }
    .active {
      padding-left: 3rem;
      transition: all 0.5s ease-out;
      color: #fff;
      box-shadow: inset 200px 0 200px 0 #9a1750;
      border-radius: 5px;
    }

    a {
      padding: 1rem;
      color: #9a1750;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.5;
      text-decoration: none;
    }
    .concept-logo {
      width: 150px;
      color: #54b3d6;
    }

    .logo {
      display: flex;
      justify-content: center;
      padding-right: 2rem;
    }
  }
`;

const SideBar = () => {
  return (
    <SideBarDiv>
      <div className="side-container sidebar">
        <div className="content">
          {/* <div className="logo">
            <img className="concept-logo" src={conceptLogo} alt="Concept Logo" />
          </div> */}
          <div className="nav-links">
            <NavLink key={`link-to-dashboard`} className="link" to="/" activeclassname="active">
              <span>
                <FiSearch />
              </span>
              Search
            </NavLink>
            <NavLink
              key={`link-to-all-codes`}
              className="link"
              to="/all-codes"
              activeclassname="active">
              <span>
                <BsCodeSlash />
              </span>
              MyCodes
            </NavLink>
            <NavLink
              key={`link-to-add-codes`}
              className="link"
              to="/add-codes"
              activeclassname="active">
              <span>
                <IoAddCircleOutline />
              </span>
              Add Codes
            </NavLink>
            <NavLink
              key={`link-to-success-board`}
              className="link"
              to="/success-board"
              activeclassname="active">
              <span>
                <IoTrophyOutline />
              </span>
              Success Board
            </NavLink>
            <NavLink
              key={`link-to-profile`}
              className="link"
              to="/profile"
              activeclassname="active">
              <span>
                <CgProfile />
              </span>
              Profile
            </NavLink>
            <NavLink
              key={`link-to-advanced-search`}
              className="link"
              to="/advanced-search"
              activeclassname="active">
              <span>
                <SiElasticsearch />
              </span>
              Advanced Search
            </NavLink>
          </div>
        </div>
      </div>
    </SideBarDiv>
  );
};

export default SideBar;
