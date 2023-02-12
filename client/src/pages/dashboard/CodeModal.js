import React, { useState } from "react";

import CodeBlockModal from "./CodeBlockModal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { MdContentCopy } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";

const StyledCodeModal = styled.div`
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

    p {
      padding: 0.5rem 1rem;
      color: #67b16a;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }

  .code-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      font-size: 1em;
    }

    .title {
      margin: 1rem 0;
    }
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

  .copy {
    font-size: 2rem;
    color: #9a1750;
    cursor: pointer;
  }

  span {
    padding: 0;
    font-size: 1.5rem;
    color: #67b16a;
    //font-family: "Montserrat", sans-serif;
  }
`;

export const BackdropOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 111;
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

const style = {
  color: "#9a1750",
  fontSize: "2.5rem",

  cursor: "pointer",
};

const copied = {
  color: "#67B16A",
  fontSize: "2.5rem",
};

const CodeModal = ({ code, title, language, description, closeModal }) => {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = () => {
    console.log("copy");
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <>
      <div>
        <StyledCodeModal className="code-modal">
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
            {copy ? (
              <div className="top-right">
                <FaClipboardCheck className="copy" style={copied} />
                <p>Code copied!</p>
              </div>
            ) : (
              <div className="top-right">
                <MdContentCopy onClick={copyToClipboard} className="copy" />
              </div>
            )}
            <CodeBlockModal>{code}</CodeBlockModal>
            {/* <p>{code}</p> */}
          </div>
        </StyledCodeModal>
      </div>
      <BackdropOver onClick={closeModal} />
    </>
  );
};

export default CodeModal;
