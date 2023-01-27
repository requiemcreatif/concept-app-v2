import React from "react";
import { useEffect, useState } from "react";
import SingleCode from "./SingleCode";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import DeleteConfirm from "../generalComponents/DeleteConfirm";

const CodeContainer = styled.div`
  margin: 0 auto;
  h3 {
    text-align: center;
  }
`;

const StyledCodeDisplay = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem auto;
  //gap: 1rem;
  //opacity: 0;
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;

const CodeDisplay = ({ _id, deleteCode }) => {
  const { getCodes, codes, isLoading, totalCodes } = useAppContext();
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
    <div>
      <CodeContainer>
        <h3>
          {totalCodes} code{codes.length > 1 && "s"} found
        </h3>
        <StyledCodeDisplay>
          {codes.map((code) => {
            return <SingleCode key={code._id} {...code} />;
          })}
        </StyledCodeDisplay>
      </CodeContainer>
    </div>
  );
};

export default CodeDisplay;
