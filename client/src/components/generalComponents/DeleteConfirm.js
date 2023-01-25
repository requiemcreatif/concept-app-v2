import React from "react";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";

export const StyledSingleCode = styled.div`
  @media (max-width: 768px) {
    width: 90%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 3rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border: 2px solid #9a1750;
  background-color: #e3e2df;
  border-radius: 10px;
  height: auto;
  padding: 3rem;
  text-align: center;
  margin-bottom: 20px;
  z-index: 110;
  opacity: 1;
  //animation: 0.6s ease-in-out 0s 1 normal none running fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .title {
    color: #9a1750;
    font-size: 2.4rem;
  }

  .cancel {
    background-color: #1f2833;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 3rem;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
  }

  .delete {
    background-color: #9a1750;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 3rem;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

const BackdropOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #053651;
  transition: all 0.3s ease-in-out;
  opacity: 0.8;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DeleteConfirm = ({ _id, onClick }) => {
  const { setEditCode, deleteCode } = useAppContext();
  return (
    <>
      <div>
        <StyledSingleCode>
          <h3 className="title">Are you sure you want to delete this code?</h3>
          <button onClick={onClick} className="cancel">
            Cancel
          </button>
          <button className="delete" type="button" onClick={() => deleteCode(_id)}>
            Delete
          </button>
        </StyledSingleCode>
      </div>
      <BackdropOver onClick={onClick} />
    </>
  );
};

export default DeleteConfirm;
