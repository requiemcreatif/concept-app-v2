import CodeDisplay from "../../components/codeComponents/CodeDisplay";
import TopFilter from "../../components/generalComponents/TopFilter";
import styled from "styled-components";
const StyledAllCodes = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
`;

const AllCodes = () => {
  return (
    <StyledAllCodes>
      {/* <TopFilter /> */}

      <CodeDisplay />
    </StyledAllCodes>
  );
};

export default AllCodes;
