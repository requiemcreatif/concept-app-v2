import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import conceptLogo from "../../../images/concept-logo-blue.svg";
import Tagline from "./Tagline";

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #00afb9;
  background: linear-gradient(to right, #00afb9, #ffffff);

  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const HeaderDiv = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2rem;
  color: #1d293b;
  padding: 2rem;

  .sect-header {
    max-width: 60%;
    margin: 0 auto;
    margin-top: 20rem;
    display: grid;
    grid-template-columns: 1fr;

    gap: 2rem;

    @media (max-width: 768px) {
      max-width: 100%;
      margin-top: 5rem;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .head-main {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;

    @media (max-width: 768px) {
      width: 100%;
      justify-items: center;
    }
  }
  .tagline {
    width: 100%;

    h1 {
      font-size: 5em;
      text-transform: uppercase;
      font-weight: 800;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 2.2em;
        text-align: center;
        padding: 0 1rem;
      }
    }
  }

  .line {
    //border-bottom: 1px solid #950740;
    border-bottom: 1px solid #1d293b;
    padding-bottom: 2rem;
  }
  .logo {
    width: 10%;

    @media (max-width: 768px) {
      width: 30%;
    }
  }

  .desc-text {
    font-size: 1.2em;
    line-height: 1.5em;
    font-weight: 400;
    text-align: center;
    @media (max-width: 768px) {
      margin-top: 5rem;
      font-size: 1em;
    }
  }

  .button-div {
    margin: 0 auto;
  }
  .login {
    width: 30rem;
    background-color: #950740;
    color: #fff;
    font-weight: bold;
    border: none;
    padding: 2rem 3rem;
    border-radius: 50px;

    @media (max-width: 768px) {
      padding: 2rem;
      //max-width: ;
      width: 30rem;
    }
  }
`;

const HeaderDesign = () => {
  return (
    <Wrapper>
      <HeaderDiv>
        <div className="logo-div">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="logo"
            src={conceptLogo}
            alt=""
          />
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="line"></motion.div>
        </div>
        <section className="sect-header">
          <div className="head-main">
            <Tagline />
            <div className="desc-text">
              <p>
                {/* The Concept app simplifies the search for programming concepts, explanations,
                refreshers, and examples for developers of all levels. */}
                With its AI-powered advanced search results, The Concept Box serves as a learning
                tool that helps programmers quickly and effectively understand and overcome
                programming challenges.
              </p>
            </div>
            <div className="button-div">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#950740" }}
                  transition={{ duration: 0.3 }}
                  className="login">
                  LOGIN / REGISTER
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
        {/* <HeaderDemoCode /> */}
        <div></div>
      </HeaderDiv>
    </Wrapper>
  );
};

export default HeaderDesign;
