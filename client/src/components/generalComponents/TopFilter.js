import React from "react";
import styled from "styled-components";

const StyledTopFilter = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    background-color: #fff;
    padding: 0.8rem 3rem;
    border: none;
    border-radius: 8px;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ease-out;
      color: #fff;
      box-shadow: inset 200px 0 200px 0 #54b3d6;
      border-radius: 5px;
    }
  }
`;

const TopFilter = () => {
  return (
    <StyledTopFilter>
      <button>All</button>
      <button>HTML</button>
      <button>JavaScript</button>
      <button>React</button>
      <button>css</button>
      <button>Node</button>
      <button>Express</button>
    </StyledTopFilter>
  );
};

export default TopFilter;
