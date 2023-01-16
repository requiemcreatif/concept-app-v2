import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="add-codes">Add Codes</Link>
        <Link to="all-codes">All Codes</Link>
        <Link to="success-board">Success Board</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
