import React from "react";
import Advanced from "./Advanced";
import styled from "styled-components";

const Div = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; */
`;

const AdvancedSearch = () => {
  return (
    <div>
      <h1>Hello from the advanced search page </h1>
      <Advanced />
    </div>
  );
};

export default AdvancedSearch;
