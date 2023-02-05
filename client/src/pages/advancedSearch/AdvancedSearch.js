import React from "react";
import AddAiCodes from "../addCodes/AddAiCodes";
import { useAppContext } from "../../context/appContext";

import styled from "styled-components";
import GptSearch from "./GptSearch";

const Div = styled.div`
  padding: 2rem;
  //background-color: #0001;
  //max-width: 100rem;
  margin: 10rem auto;
`;

const AdvancedSearch = () => {
  const { user, code } = useAppContext();
  return (
    <Div>
      <GptSearch user={user} code={code} />
      {/* <AddAiCodes /> */}
    </Div>
  );
};

export default AdvancedSearch;
