import React from "react";
import NavBar from "../components/generalComponents/NavBar";
import MainHeader from "../components/generalComponents/MainHeader";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Dashboard from "./Dashboard";

const StyledHomePage = styled.div`
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      {/* <NavBar /> */}

      <MainHeader />
      <Dashboard />
    </StyledHomePage>
  );
};

export default HomePage;
