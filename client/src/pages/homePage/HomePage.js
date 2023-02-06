import MainHeader from "../../components/generalComponents/header/MainHeader";
import Footer from "../../components/generalComponents/Footer";
import styled from "styled-components";

const StyledHomePage = styled.div`
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <MainHeader />
      {/* <Footer /> */}
    </StyledHomePage>
  );
};

export default HomePage;
