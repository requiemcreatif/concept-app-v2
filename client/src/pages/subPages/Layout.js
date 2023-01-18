import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../../components/generalComponents/NavBar";
import SideBar from "../../components/generalComponents/SideBar";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  margin: 0 auto;
  .main {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "aside outlet";
  }

  .nav {
    grid-area: nav;
  }

  .aside {
    grid-area: aside;
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

const Layout = () => {
  const showSidebar = () => {
    document.querySelector(".side-container").classList.toggle("show-sidebar");
  };
  return (
    <LayoutWrapper>
      <main className="main">
        <div className="sidebar-wrapper">
          <SideBar showSidebar={showSidebar} />
        </div>
        <div>
          <div className="nav">
            <NavBar showSidebar={showSidebar} />
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
