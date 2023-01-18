import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import conceptLogo from "../../images/concept-logo-white.svg";

const SideBarDiv = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    background-color: #000;

    .side-container {
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: all 0.5s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      padding: 2rem 5rem;
      gap: 10rem;
    }
    .show-sidebar {
      margin-left: 0;
      transition: all 0.5s ease-in;
    }

    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    /* .link {
      display: flex;
      align-items: center;
      color: #fff;
      padding: 1rem 0;

      text-decoration: none;
    }
    .link:hover {
      padding-left: 3rem;
      transition: all 0.5s ease-out;
    } */
    .link {
      display: flex;
      align-items: center;

      box-shadow: inset 0 0 0 0 #54b3d6;
      color: #54b3d6;
      //padding: 0 0.25rem;
      //margin: 0 -0.25rem;
      transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out padding 0.3s ease-in-out;
    }
    .link:hover {
      padding-left: 3rem;
      transition: all 0.5s ease-out;
      color: #fff;
      //box-shadow: inset 200px 0 200px 0 #54b3d6;
    }

    /* Presentational styles */
    a {
      padding: 1rem;
      color: #54b3d6;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5;
      text-decoration: none;
    }

    .concept-logo {
      width: 100px;
    }
  }
`;

const SideBar = () => {
  return (
    <SideBarDiv>
      <div className="side-container">
        <div className="content">
          <div>
            <img className="concept-logo" src={conceptLogo} alt="Concept Logo" />
          </div>
          <div className="nav-links">
            <Link className="link" to="all-codes">
              Search
            </Link>
            <Link className="link" to="add-codes">
              Add Codes
            </Link>
            <Link className="link" to="success-board">
              Success Board
            </Link>
            <Link className="link" to="profile">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </SideBarDiv>
  );
};

export default SideBar;
