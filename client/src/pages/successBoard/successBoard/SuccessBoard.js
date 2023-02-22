import React from "react";
import styled from "styled-components";
import CodingGame from "../CodingGame/CodingGame";

const Div = styled.div`
  max-width: 1000px;
  margin: 10rem auto 0 auto;
`;

const SuccessBoard = () => {
  return (
    <Div>
      <CodingGame />
    </Div>
  );
};

export default SuccessBoard;
