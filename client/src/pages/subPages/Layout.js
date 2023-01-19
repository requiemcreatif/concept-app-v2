import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../../components/generalComponents/NavBar";
import SideBar from "../../components/generalComponents/SideBar";
import SmallSideBar from "../../components/generalComponents/SmallSideBar";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  margin: 0 auto;
  .main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "nav "
      "aside ";
  }

  .nav {
    grid-area: nav;
  }

  .aside {
    grid-area: aside;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "sidebar outlet";
  }
`;

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const showSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.querySelector(".side-container").classList.toggle("show-sidebar");
  };
  return (
    <LayoutWrapper>
      <main className="main">
        <div className="sidebar-wrapper aside">
          <div className="side-bar">
            <SideBar showSidebar={showSidebar} />
            {!isSidebarOpen && <SmallSideBar showSidebar={showSidebar} />}
          </div>

          <div className="outlet">
            <Outlet />
          </div>
        </div>
        <div>
          <div className="nav">
            <NavBar showSidebar={showSidebar} />
          </div>
        </div>
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
