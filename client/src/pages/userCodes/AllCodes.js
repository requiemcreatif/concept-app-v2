import CodeDisplay from "./CodeDisplay";
import styled from "styled-components";
const StyledAllCodes = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
`;

const AllCodes = () => {
  return (
    <StyledAllCodes>
      <CodeDisplay />
    </StyledAllCodes>
  );
};

export default AllCodes;
