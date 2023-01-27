import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import conceptLogo from "../../images/concept-logo-white.svg";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 10rem 1rem;
  //max-width: 1200px;
  //padding: 10rem 2rem;
  @media (max-width: 768px) {
    padding: 10rem 1rem 0 1rem;
  }

  .logo {
    width: 150px;
    padding-bottom: 3rem;
  }
`;

const Top = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  height: 400px;
  border-radius: 5px;
  grid-area: top;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "topOne topTwo";
  gap: 0.5rem;
  //background-color: #000;
  color: #fff;
  padding: 0.5rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "topOne"
      "topTwo";
    gap: 0.5rem;
    padding: 0.5rem 0;
  }

  .topOne {
    grid-area: topOne;
    background-color: #000;
    border-radius: 5px;
    color: #fff;
    //padding: 5rem;
  }

  .topTwo {
    grid-area: topTwo;
    background-color: #950740;
    border-radius: 5px;
    color: #fff;
    //padding: 5rem;
  }
`;

// DOWN
const Down = styled.div`
  margin: 0 auto;
  //margin-top: 2rem;
  max-width: 1200px;
  grid-area: down;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "left right";

  gap: 0.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
    gap: 0.5rem;
  }

  .left {
    grid-area: left;
    background-color: #000;
    border-radius: 5px;
    color: #fff;
    padding: 5rem;
    font-weight: 600;

    @media (max-width: 768px) {
      padding: 2rem;
      font-size: 1em;
    }

    p {
      font-size: 1em;
      line-height: 1.4em;
      padding-bottom: 1rem;
      font-weight: 300;
    }
  }

  .right {
    grid-area: right;
    //background-color: #000;
    //background-color: #fff;
    background-color: #0b0c10;
    //background-image: linear-gradient(180deg, rgba(11, 12, 16, 1) 0%, rgba(31, 40, 51, 1) 58%);
    border-radius: 5px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
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
      /* transform: scale(1.05);
      transition: all 0.1s ease-in-out; */
    }
  }
`;

const ThreeDivs = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 400px;
  border-radius: 5px;
  background-color: #000;
`;

const HeaderDesign = () => {
  return (
    <Wrapper>
      {/* <div>
        <img className="logo" src={conceptLogo} alt="" />
      </div> */}
      <Top>
        <motion.div
          whileHover={{ scale: 0.98, backgroundColor: "#950740" }}
          transition={{ duration: 0.3 }}
          className="topOne"></motion.div>
        <div className="topTwo"></div>
      </Top>
      <Down className="down">
        <div className="left">
          <p>
            Concept is an app that makes it easier for programmers to find explanations, refreshers,
            and examples for various programming concepts. Whether you are a beginner or an
            experienced developer, The Concept Box can help you understand and solve programming
            challenges more quickly and effectively.
          </p>
          <p>
            Concept streamlines this process by providing a more focused and efficient way for
            developers to find the information they need. Whether you are a beginner or an
            experienced developer, The Concept Box can help you understand and solve programming
            challenges more quickly and effectively.
          </p>
        </div>

        <div className="right">
          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#950740" }}
              transition={{ duration: 0.3 }}
              className="login">
              LOGIN / REGISTER
            </motion.button>
          </Link>
        </div>
      </Down>
      <ThreeDivs></ThreeDivs>
    </Wrapper>
  );
};

export default HeaderDesign;

//color: #c3073f;
