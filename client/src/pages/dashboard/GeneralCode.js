import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";
import { StyledSingleCode } from "../../components/codeComponents/SingleCode";
import CodeModal from "./CodeModal";
import BackdropOver from "../dashboard/CodeModal";

const StyledGeneralCode = styled.div`
  //padding-top: 5rem;
  .card {
    width: 300px;
    max-width: 90%;
    height: 350px;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    margin: 1rem auto;

    @media (max-width: 768px) {
      width: 350px;
    }
  }

  .btn-code {
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      .card {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .card-details {
    padding: 5rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
  }
  .language-div {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;

    .javaScript {
      background-color: #00afb9;
      padding: 0.5rem 1rem;
      border-radius: 10px 0 0 0;
    }

    .html {
      background-color: #000;
      padding: 0.5rem 1rem;
      border-radius: 10px 0 0 0;
    }

    .react {
      background-color: #053651;
      padding: 0.5rem 1rem;
      border-radius: 10px 0 0 0;
    }
    .node {
      background-color: #9a1750;
      padding: 0.5rem 1rem;
      border-radius: 10px 0 0 0;
    }
    .express {
      background-color: #c3c6ce;
      padding: 0.5rem 1rem;
      border-radius: 10px 0 0 0;
    }
    .css {
      background-color: #ff9800;
      padding: 0.5rem 1rem;
      border-radius: 10px 0 0 0;
    }
  }

  .status {
    font-size: 1.2rem;
  }

  .copyIcon {
    display: flex;
    justify-content: flex-end;

    padding: 0 1rem;
    cursor: pointer;
  }

  .code-div {
    padding: 2rem;
    border-radius: 10px;
    //margin: 1rem 0;
    color: #00afb9;
    text-align: left;

    background-color: #000;
  }
`;

const LanguageDiv = styled.div`
  border-radius: 10px;
`;

const GeneralCode = ({
  title,
  description,
  language,
  code,
  codeStatus,
  codeId,
  selectedId,
  _id,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const codeTrim = code.length > 20 ? code.substring(0, 200) + "..." : code;
  const codeDescription =
    description.length > 20 ? description.substring(0, 200) + "..." : description;
  return (
    <StyledGeneralCode>
      {showModal && (
        <CodeModal
          title={title}
          description={description}
          language={language}
          code={code}
          closeModal={closeModal}
        />
      )}
      {/* <CodeModal
        title={title}
        description={description}
        language={language}
        code={code}
        closeModal={closeModal}
      /> */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        type="button"
        className="btn-code"
        onClick={() => {
          openModal();
          console.log("clicked");
        }}>
        <div className="card">
          <LanguageDiv className="language-div">
            {language === "JavaScript" ? (
              <div className="language javaScript">{language}</div>
            ) : language === "React" ? (
              <div className="language react">{language}</div>
            ) : language === "css" ? (
              <div className="language css">{language}</div>
            ) : language === "Node" ? (
              <div className="language node">{language}</div>
            ) : language === "Express" ? (
              <div className="language express">{language}</div>
            ) : (
              <div className="language html">{language}</div>
            )}
          </LanguageDiv>

          <div className="card-details">
            <h3 className="title">{title}</h3>
            <p className="description">{codeDescription}</p>
            {/* <p className="code"> {code}</p> */}
            {/* <MdContentCopy /> */}
            <div className="code-div">
              {codeTrim}
              <div className="copyIcon">
                <MdContentCopy />
              </div>
            </div>
          </div>
        </div>
      </motion.button>
    </StyledGeneralCode>
  );
};

export default GeneralCode;
