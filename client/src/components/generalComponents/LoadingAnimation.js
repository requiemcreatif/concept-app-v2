import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid #f3f3f3;
  border-top: 4px solid #9a1750;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate} 0.8s linear infinite;
`;

const LoadingAnimation = () => <Loading />;

export default LoadingAnimation;
