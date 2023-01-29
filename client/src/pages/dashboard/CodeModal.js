import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";

const StyledCodeModal = styled.div`
  @media (max-width: 768px) {
    width: 90%;
  }

  width: 400px;
  //height: 400px;
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
  animation: 0.6s ease-in-out 0s 1 normal none running fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const BackdropOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #053651;
  transition: all 0.3s ease-in-out;
  opacity: 0.5;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CodeModal = ({ code, title, language, description, closeModal }) => {
  return (
    <>
      <div>
        <StyledCodeModal>
          <div>
            <h2>{title}</h2>
            <p>{code}</p>
            <p>Language: {language}</p>
            <p>Description: {description}</p>
          </div>
          <div>
            <IoIosCloseCircleOutline onClick={closeModal} />
          </div>
        </StyledCodeModal>
      </div>
      <BackdropOver closeModal={closeModal} />
    </>
  );
};

export default CodeModal;
