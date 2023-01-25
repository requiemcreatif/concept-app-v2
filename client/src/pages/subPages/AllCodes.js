import React from "react";

import CodeDisplay from "../../components/allCodes/CodeDisplay";

import TopFilter from "../../components/generalComponents/TopFilter";

import styled from "styled-components";

const StyledAllCodes = styled.div`
  margin: 0 auto;
`;

const AllCodes = () => {
  return (
    <StyledAllCodes>
      <TopFilter />

      <CodeDisplay />
    </StyledAllCodes>
  );
};

export default AllCodes;
