import React from "react";
import SkillTest from "./skillTests/SkillTest";
import styled from "styled-components";

const Div = styled.div`
  max-width: 1000px;
  margin: 10rem auto 0 auto;
`;

const SuccessBoard = () => {
  return (
    <Div>
      <h1>Success Board</h1>

      <SkillTest />
    </Div>
  );
};

export default SuccessBoard;
