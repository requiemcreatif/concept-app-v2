import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import conceptLogo from "../../../images/concept-logo-white.svg";
import HeaderDemoCode from "./HeaderDemoCode";

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #1d293b;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2rem;
  color: #fff;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  .sect-header {
    margin-top: 20rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
      margin-top: 3rem;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .head-main {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
      width: 100%;
      justify-items: center;
    }
  }
  .tagline {
    width: 100%;

    h1 {
      font-size: 3em;
      text-transform: uppercase;

      @media (max-width: 768px) {
        font-size: 2em;
      }
    }
  }

  .line {
    border-bottom: 1px solid #950740;
    padding-bottom: 2rem;
  }
  .logo {
    width: 10%;

    @media (max-width: 768px) {
      width: 20%;
    }
  }

  .desc-text {
    font-size: 1em;
    line-height: 1.5em;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 1em;
    }
  }
  .login {
    background-color: #950740;
    color: #fff;
    font-weight: bold;
    border: none;
    padding: 1.6rem 2rem;
    border-radius: 50px;

    @media (max-width: 768px) {
      padding: 1.5rem 2rem;
      width: 100%;
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
            <div className="tagline">
              <h1>
                Unlock your <br />
                full potential as <br />a programmer with <br />
                The Concept
              </h1>
            </div>

            <div className="desc-text">
              <p>
                The Concept app simplifies the search for programming concepts, explanations,
                refreshers, and examples for developers of all levels. With its AI-powered advanced
                search results, The Concept Box serves as a learning tool that helps programmers
                quickly and effectively understand and overcome programming challenges.
              </p>
            </div>

            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#950740" }}
                transition={{ duration: 0.3 }}
                className="login">
                LOGIN / REGISTER
              </motion.button>
            </Link>
          </div>
          <HeaderDemoCode />
        </section>
      </HeaderDiv>
    </Wrapper>
  );
};

export default HeaderDesign;
