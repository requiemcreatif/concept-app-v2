import React from "react";
import styled, { keyframes } from "styled-components";

const hover = keyframes`
  from {
    box-shadow: 5px 5px 10px #e6e6e6, -5px -5px 10px #ffffff;
  }
  to {
    box-shadow: -5px -5px 10px #e6e6e6, 5px 5px 10px #ffffff;
  }
`;

const NeumorphismButton = styled.button`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #333;
  background-color: #e5e5e5;

  border-radius: 10px;
  box-shadow: 10px 10px 20px #e6e6e6, -10px -10px 20px #ffffff;
  box-shadow: 10px 10px 20px #e6e6e6, -10px -10px 20px #ffffff, inset 5px 5px 10px #e6e6e6,
    inset -5px -5px 10px #ffffff;

  transition: all 0.1s ease-in-out;

  &:hover {
    animation: ${hover} 0.6s ease-in-out;
  }
`;

const CssAnimation = () => {
  return <NeumorphismButton>Hover me</NeumorphismButton>;
};

export default CssAnimation;
