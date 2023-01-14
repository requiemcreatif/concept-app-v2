import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/generalComponents/NavBar";
import MainHeader from "../components/generalComponents/MainHeader";
import styled from "styled-components";

const StyledHomePage = styled.div`
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <NavBar />
      <MainHeader />
    </StyledHomePage>
  );
};

export default HomePage;
