import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMainHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 2rem;

    h1 {
      font-size: 5em;
    }

    p {
      font-size: 1.1em;
      line-height: 1.3em;
      padding-bottom: 1rem;
    }
  }

  button {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 1.5rem 2.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const MainHeader = () => {
  return (
    <StyledMainHeader>
      <div className="left-side">
        <h1>The smartest way to find your answer</h1>
        <p>
          The Concept Box is an app that makes it easier for programmers to find explanations,
          refreshers, and examples for various programming concepts. Whether you are a beginner or
          an experienced developer, The Concept Box can help you understand and solve programming
          challenges more quickly and effectively.
        </p>
        <Link to="/register">
          <button>Login / Register</button>
        </Link>
      </div>
      <div className="right-side">
        <h2> </h2>
      </div>
    </StyledMainHeader>
  );
};

export default MainHeader;
