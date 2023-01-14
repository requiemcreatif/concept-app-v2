import React from "react";
import styled from "styled-components";
import NavBar from "../components/generalComponents/NavBar";
import Display from "../components/Display";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Display />
    </div>
  );
};

export default Dashboard;
