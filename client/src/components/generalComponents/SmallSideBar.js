import { Outlet, Link, useLocation, NavLink } from "react-router-dom";
import {} from "react-router-dom";

import styled from "styled-components";
import conceptLogo from "../../images/concept-logo-blue.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoAddCircleOutline, IoTrophyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const SideBarDiv = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    .side-container {
      width: 80px;
      transition: all 0.5s ease-in-out;
    }
    .content {
      position: fixed;
      top: 100px;
      display: flex;
      flex-direction: column;
      gap: 10rem;
    }
    .show-sidebar {
      margin-left: 0;
      transition: all 0.5s ease-in;
    }

    .nav-links {
      padding: 2rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .link {
      margin: 0.5rem 0;
      gap: 1rem;
      padding: 1rem 1.5rem;
      color: #54b3d6;
      transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out padding 0.3s ease-in-out;
    }
    .link:hover {
      transition: all 0.5s ease-out;
      color: #fff;
      box-shadow: inset 200px 0 200px 0 #54b3d6;
      border-radius: 5px;
    }
    .active {
      transition: all 0.5s ease-out;
      color: #fff;
      box-shadow: inset 200px 0 200px 0 #54b3d6;
      border-radius: 5px;
    }

    a {
      padding: 1rem;
      color: #54b3d6;
      font-size: 1.5rem;
      font-weight: 700;
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

const style = {
  color: "#297AE8",
  fontSize: "3.5rem",
  cursor: "pointer",
};

const SmallSideBar = ({ showSidebar }) => {
  return (
    <div>
      <SideBarDiv>
        <div className="side-container">
          <div className="content">
            {/* <AiOutlineMenu style={style} /> */}
            <div className="nav-links">
              <NavLink key={`link-to-dashboard`} className="link" to="/" activeclassname="active">
                <span>
                  <FiSearch />
                </span>
              </NavLink>
              <NavLink
                key={`link-to-all-codes`}
                className="link"
                to="/all-codes"
                activeclassname="active">
                <span>
                  <FiSearch />
                </span>
              </NavLink>
              <NavLink
                key={`link-to-add-codes`}
                className="link"
                to="/add-codes"
                activeclassname="active">
                <span>
                  <IoAddCircleOutline />
                </span>
              </NavLink>
              <NavLink
                key={`link-to-success-board`}
                className="link"
                to="/success-board"
                activeclassname="active">
                <span>
                  <IoTrophyOutline />
                </span>
              </NavLink>
              <NavLink
                key={`link-to-profile`}
                className="link"
                to="/profile"
                activeclassname="active">
                <span>
                  <CgProfile />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </SideBarDiv>
    </div>
  );
};

export default SmallSideBar;
