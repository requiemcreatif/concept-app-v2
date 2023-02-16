import React from "react";
import { Link } from "react-router-dom";
import { SiElasticsearch } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { IoAddCircleOutline, IoTrophyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import "../../../pages/subPages/layout/layout.css";

const SmallMenu = (
  showSmallMenu,
  toggleTheme,
  isDarkTheme,
  isSmallMenuOpen,
  setIsSmallMenuOpen
) => {
  return (
    <div className="small-menu">
      <div className="small-menu-container">
        <div className="nav-links">
          <Link key={`link-to-dashboard`} className="small-link" to="/" activeclassname="active">
            <span>
              <FiSearch />
            </span>
            Search
          </Link>
          <Link
            key={`link-to-advanced-search`}
            className="small-link"
            to="/advanced-search"
            activeclassname="active">
            <span>
              <SiElasticsearch />
            </span>
            Advanced Search
          </Link>
          <Link
            key={`link-to-all-codes`}
            className="small-link"
            to="/all-codes"
            activeclassname="active">
            <span>
              <CgProfile />
            </span>
            MyCodes
          </Link>
          <Link
            key={`link-to-add-codes`}
            className="small-link"
            to="/add-codes"
            activeclassname="active">
            <span>
              <IoAddCircleOutline />
            </span>
            Add Codes
          </Link>
          <Link
            key={`link-to-success-board`}
            className="small-link"
            to="/success-board"
            activeclassname="active">
            <span>
              <IoTrophyOutline />
            </span>
            Success Board
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallMenu;
