import { NavLink } from "react-router-dom";
import {} from "react-router-dom";

import styled from "styled-components";

import { FiSearch } from "react-icons/fi";
import { IoAddCircleOutline, IoTrophyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsCodeSlash } from "react-icons/bs";

import { SiElasticsearch } from "react-icons/si";

const SideBarDiv = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .side-container {
      //position: sticky;
      top: 0;
      left: 0;
      width: 80px;
      transition: all 0.5s ease-in-out;
      height: 100%;
    }
    .content {
      position: fixed;
      top: 50px;
      height: 100%;
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
      color: #053651;
      transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out padding 0.3s ease-in-out;
    }
    .link:hover {
      transition: all 0.5s ease-out;
      color: #fff;
      box-shadow: inset 200px 0 200px 0 #053651;
      border-radius: 5px;
    }
    .active {
      transition: all 0.5s ease-out;
      color: #fff;
      box-shadow: inset 200px 0 200px 0 #053651;
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

const SmallSideBar = ({ showSidebar, toggleTheme, isDarkTheme, lightTheme }) => {
  return (
    <div>
      <SideBarDiv>
        <div className="side-container sidebar">
          <div className="content small-sidebar">
            {/* <AiOutlineMenu style={style} /> */}
            <div className="nav-links">
              <NavLink key={`link-to-dashboard`} className="link" to="/" activeclassname="active">
                <span>
                  <FiSearch />
                </span>
              </NavLink>
              <NavLink
                key={`link-to-advanced-search`}
                className="link"
                to="/advanced-search"
                activeclassname="active">
                <span>
                  <SiElasticsearch />
                </span>
              </NavLink>
              <NavLink
                key={`link-to-all-codes`}
                className="link"
                to="/all-codes"
                activeclassname="active">
                <span>
                  <CgProfile />
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
              {/* <NavLink
                key={`link-to-profile`}
                className="link"
                to="/profile"
                activeclassname="active">
                <span>
                  <CgProfile />
                </span>
              </NavLink> */}

              <div>
                <label className="switch">
                  <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </SideBarDiv>
    </div>
  );
};

export default SmallSideBar;
