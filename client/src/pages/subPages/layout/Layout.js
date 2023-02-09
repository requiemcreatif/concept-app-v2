import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../../components/generalComponents/navbars/NavBar";
import SideBar from "../../../components/generalComponents/navbars/SideBar";
import SmallSideBar from "../../../components/generalComponents/navbars/SmallSideBar";
import "./layout.css";

// const LayoutWrapper = styled.div`
//   margin: 0 auto;

//   .main {
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows: auto 1fr;
//     grid-template-areas:
//       "nav nav"
//       "aside ";
//   }

//   .nav {
//     grid-area: nav;
//   }

//   .aside {
//     /* grid-area: aside;
//     display: grid;
//     grid-template-columns: 1fr; */
//     //grid-template-areas: "sidebar outlet";
//   }

//   .sidebar {
//     position: absolute;
//   }
// `;

const Layout = ({ isDarkTheme, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const showSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.querySelector(".side-container").classList.toggle("show-sidebar");
  };
  return (
    <main className="main">
      <div className="nav">
        <NavBar showSidebar={showSidebar} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
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
