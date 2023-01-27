import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import CodeDisplay from "../../components/allCodes/CodeDisplay";
import TopFilter from "../../components/generalComponents/TopFilter";
import DeleteConfirm from "../../components/generalComponents/DeleteConfirm";
import styled from "styled-components";
const StyledAllCodes = styled.div`
  margin: 0 auto;
`;

const AllCodes = (
  {
    // toggleTheme, isDarkTheme
  }
) => {
  const { deleteCode, _id } = useAppContext();

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const removeModal = () => setModalIsOpen(true, console.log("show"));
  // const handleClose = () => setModalIsOpen(false, console.log("closed"));
  return (
    <StyledAllCodes>
      <TopFilter />
      {/* {modalIsOpen && <DeleteConfirm onClick={handleClose} deleteCode={deleteCode} _id={_id} />} */}
      <CodeDisplay />
    </StyledAllCodes>
  );
};

export default AllCodes;
