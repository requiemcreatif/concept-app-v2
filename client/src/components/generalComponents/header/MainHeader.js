import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderDesign from "./HeaderDesign";

const Wrapper = styled.div`
  background-color: #ffffff;
  height: 92vh;
`;

const StyledMainHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20rem 2rem;
  color: #fff;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 2rem;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
    padding: 2rem;

    h1 {
      font-size: 4em;
      font-weight: 800;
      max-width: 700px;
      color: #c3073f;
    }

    p {
      font-size: 1.1em;
      line-height: 1.4em;
      padding-bottom: 1rem;
      font-weight: 300;
    }
  }

  .login {
    background-color: #950740;
    color: #fff;
    font-weight: bold;
    border: none;
    padding: 2rem 2rem;
    border-radius: 30px;
    //box-shadow: 5px 5px 10px #e6e6e6, -5px -5px 10px #ffffff;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    @media (max-width: 768px) {
      //padding: 1.5rem 2rem;
      width: 300px;
    }

    &:hover {
      //box-shadow: 2px 2px 5px #e6e6e6, -2px -2px 5px #ffffff;
      transform: scale(1.05);
      transition: all 0.1s ease-in-out;
    }
  }
`;

const MainHeader = ({ code, setCode }) => {
  return (
    <Wrapper>
      <HeaderDesign />
    </Wrapper>
  );
};

export default MainHeader;
