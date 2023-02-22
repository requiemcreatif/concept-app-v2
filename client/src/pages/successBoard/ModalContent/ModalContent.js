import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.3s ease-in-out;

  &.show {
    opacity: 1;
    transform: scale(1);
  }
  @keyframes explode {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ModalContent = ({ title, subtitle }) => {
  return (
    <ModalContainer className="show">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ModalContainer>
  );
};

export default ModalContent;
