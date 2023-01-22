import MainHeader from "../components/generalComponents/MainHeader";
import styled from "styled-components";

const StyledHomePage = styled.div`
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <MainHeader />
    </StyledHomePage>
  );
};

export default HomePage;
