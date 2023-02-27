import React from "react";

import styled from "styled-components";
import CodingGame from "../CodingGame/CodingGame";

import { useAppContext } from "../../../context/appContext";

const Div = styled.div`
  max-width: 1000px;
  margin: 10rem auto 0 auto;
`;

const SuccessBoard = () => {
  const { getAllQuestions } = useAppContext();
  console.log(getAllQuestions);
  return (
    <Div>
      <CodingGame />
    </Div>
  );
};

export default SuccessBoard;
