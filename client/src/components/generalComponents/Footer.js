import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  //background-color: #000;
  background-color: #1f2833;
  color: #fff;
  padding: 5.1rem 0;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
  //margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 3rem 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>©Concept 2023 | All rights reserved</p>
    </StyledFooter>
  );
};

export default Footer;
