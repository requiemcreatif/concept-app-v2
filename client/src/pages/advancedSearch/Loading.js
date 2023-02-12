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

const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoadingSpinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 0.8s linear infinite;
`;

const LoadingText = styled.p`
  animation: ${blink} 1s ease-in-out infinite;
`;

const Loading = () => (
  <LoadingContainer>
    <LoadingSpinner />
    <LoadingText>Looking for the best answer...</LoadingText>
  </LoadingContainer>
);

export default Loading;
