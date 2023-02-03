import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { MdContentCopy } from "react-icons/md";

const Wrapper = styled.div``;

const StyledCodeModal = styled.div`
  .left {
    padding: 2rem;
    background-color: #fff;
    border-radius: 15px 0 0 15px;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; */
    //gap: 5rem;
  }
  .right {
    position: relative;
    border-radius: 0 10px 10px 0;
    background-color: #1d293b;
    color: #fff;
    height: auto;
    padding: 7rem 2rem 2rem 2rem;
    //overflow-y: scroll;
    overflow-x: hidden;
    font-size: 1.5rem;

    line-height: 1.5;
    font-weight: 200;

    .top-right {
      display: flex;
      justify-content: flex-end;
      padding: 1.5rem;
      position: absolute;
      top: 0;
      right: 0;
      //background-color: #9a1750;
      border-bottom: 1px solid #9a1750;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  width: 1000px;
  height: 60rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  //align-items: center;
  justify-content: center;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  //gap: 3rem;
  //box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  //border: 1px solid #9a1750;
  //background-color: #e3e2df;
  border-radius: 10px;
  padding: 3rem;
  text-align: center;
  //margin-bottom: 20px;
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
    width: 95%;
    grid-template-columns: 1fr;
  }

  .code-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .title {
    font-size: 2rem;
    font-weight: 600;
    color: #9a1750;
    text-transform: uppercase;
  }

  .copy-close {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const BackdropOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #1d293b;
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

const style = {
  color: "#9a1750",
  fontSize: "2.5rem",

  cursor: "pointer",
};

const CodeModal = ({ code, title, language, description, closeModal }) => {
  return (
    <>
      <div>
        <StyledCodeModal>
          <div className=" left">
            <div className="copy-close ">
              <IoIosCloseCircleOutline style={style} onClick={closeModal} />
            </div>
            <div className="code-content">
              <h3 className="title">{title}</h3>

              {/* <p>{language}</p> */}
              <p>{description}</p>
            </div>
          </div>
          <div className="right">
            <div className="top-right">
              <MdContentCopy />
            </div>
            <p>{code}</p>
          </div>
        </StyledCodeModal>
      </div>
      <BackdropOver onClick={closeModal} />
    </>
  );
};

export default CodeModal;
