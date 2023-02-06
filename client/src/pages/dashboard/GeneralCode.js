import React, { useState, useEffect } from "react";
import CodeBlock from "./CodeBlock";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import CodeModal from "./CodeModal";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
export const StyledGeneralCode = styled.div`
  //padding-top: 5rem;
  .card {
    width: 30rem;
    max-width: 95%;
    height: 350px;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    margin: 0.5rem auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
      width: 350px;
    }
  }

  .btn-code {
    //height: 5rem;
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
    padding: 5rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;

    h3 {
      border-bottom: 0.5px solid #00afb9;
      padding-bottom: 0.5rem;
      color: #053651;
    }

    .description {
      text-align: left;
    }
  }
  .language-div {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: #fff;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 25px;
      width: 4rem;
      height: 4rem;
    }

    .javaScript {
      background-color: #00afb9;
    }
    .html {
      background-color: #000;
    }

    .react {
      background-color: #053651;
    }
    .node {
      background-color: #9a1750;
    }
    .express {
      background-color: #c3c6ce;
    }
    .css {
      background-color: #ff9800;
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
`;

const LanguageDiv = styled.div`
  border-radius: 10px;
`;

const style = {
  width: "250px",
  color: "#000",
};

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

  const codeTrim = code.length > 20 ? code.substring(0, 40) + "..." : code;
  const codeDescription =
    description.length > 20 ? description.substring(0, 140) + "..." : description;
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
          <div className="language-div">
            {language === "JavaScript" ? (
              <div className="language javaScript icon">
                <IoLogoJavascript style={style} />
              </div>
            ) : language === "React" ? (
              <div className="language react icon">{language}</div>
            ) : language === "css" ? (
              <div className="language css icon">
                <SiCsswizardry />
              </div>
            ) : language === "Node" ? (
              <div className="language node icon">{language}</div>
            ) : language === "Express" ? (
              <div className="language express icon">{language}</div>
            ) : (
              <div className="language html icon">{language}</div>
            )}
          </div>

          <div className="card-details">
            <h3 className="title">{title}</h3>
            <p className="description">{codeDescription}</p>
            <CodeBlock>{codeTrim}</CodeBlock>
          </div>
        </div>
      </motion.button>
    </StyledGeneralCode>
  );
};

export default GeneralCode;
