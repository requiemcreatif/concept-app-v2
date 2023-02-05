import CodeDisplay from "./CodeDisplay";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
const StyledAllCodes = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
`;

const AllCodes = () => {
  //const { user, code, _id, deleteCode } = useAppContext();
  return (
    <StyledAllCodes>
      <CodeDisplay />
    </StyledAllCodes>
  );
};

export default AllCodes;
