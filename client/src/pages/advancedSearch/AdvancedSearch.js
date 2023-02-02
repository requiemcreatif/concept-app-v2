import React from "react";
import Advanced from "./Advanced";
import ChatBot from "./ChatBot";
import styled from "styled-components";
import GptChat from "./GptChat";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AdvancedSearch = () => {
  return (
    <Div>
      <Advanced />
      {/* <GptChat /> */}
    </Div>
  );
};

export default AdvancedSearch;
