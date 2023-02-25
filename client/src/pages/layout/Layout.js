import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbars/NavBar";
import SideBar from "../../components/navbars/SideBar";
import SmallSideBar from "../../components/navbars/SmallSideBar";
import "./layout.css";
//import SmallMenu from "../../../components/generalComponents/navbars/SmallMenu";

const Layout = ({ isDarkTheme, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const showSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.querySelector(".side-container").classList.toggle("show-sidebar");
  };

  //Small Menu
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);
  const showSmallMenu = () => {
    setIsSmallMenuOpen(!isSmallMenuOpen);
    console.log("isSmallMenuOpen: ", isSmallMenuOpen);
    document.querySelector(".small-menu").classList.toggle("show-small-menu");
  };
  return (
    <main className="main">
      <div className="nav">
        <NavBar
          showSidebar={showSidebar}
          showSmallMenu={showSmallMenu}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
      </div>
      <div className="sidebar-wrapper aside">
        <div className="side-bar sidebar">
          <SideBar showSidebar={showSidebar} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          {!isSidebarOpen && (
            <SmallSideBar
              showSidebar={showSidebar}
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
          )}
        </div>

        <div className="outlet">
          <Outlet toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </div>
      </div>
    </main>
  );
};

export default Layout;
