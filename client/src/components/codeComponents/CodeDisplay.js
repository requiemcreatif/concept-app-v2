import React from "react";
import { useEffect, useState } from "react";
import SingleCode from "./SingleCode";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import Profile from "../../pages/profile/Profile";

const CodeWrapper = styled.div`
  margin: 0 auto;

  .total-div {
    text-align: center;
    border-bottom: 1px solid #00afb9;
    max-width: 1400px;
    margin: 0 auto;
  }

  .total-codes {
    text-align: center;
    padding: 3rem;
  }
  .head-title {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    text-align: center;

    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
    padding: 2rem 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const CodeContainer = styled.div`
  margin: 0 auto;

  h3 {
    text-align: center;
  }
`;

const StyledCodeDisplay = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr;
  margin: 1rem auto;
  //gap: 0.5;
  //opacity: 0;
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;

const CodeDisplay = ({ _id, deleteCode }) => {
  const { getCodes, codes, isLoading, totalCodes, language, title } = useAppContext();
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const removeModal = () => setModalIsOpen(true, console.log("show"));
  // const handleClose = () => setModalIsOpen(false, console.log("closed"));

  useEffect(() => {
    getCodes();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (codes.length === 0) {
    return <h1>No codes found</h1>;
  }

  return (
    <CodeWrapper className="global-text">
      <div className="total-div">
        <h3 className="total-codes">
          Congratulations!! You submitted {totalCodes} code{codes.length > 1 && "s"}
        </h3>
      </div>

      <div className="head-title">
        <div>
          <p>Language</p>
        </div>
        <div>
          <p>Title</p>
        </div>
        <div>
          <p>Description</p>
        </div>
        <div>
          <p>Code</p>
        </div>
        <div>
          <p>Status</p>
        </div>
      </div>
      <CodeContainer>
        {/* <div className="head-title">
          <p>Language</p>
          <p>Title</p>
          <p>Description</p>
          <p>Code</p>
          <p>Status</p>
        </div> */}
        <StyledCodeDisplay>
          {codes.map((code) => {
            return <SingleCode key={code._id} {...code} />;
          })}
        </StyledCodeDisplay>
      </CodeContainer>
      <Profile />
    </CodeWrapper>
  );
};

export default CodeDisplay;
