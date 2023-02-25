import React, { useState } from "react";
import CodeBlock from "./CodeBlock";
import styled from "styled-components";
import CodeModal from "./CodeModal";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

export const StyledGeneralCode = styled.div`
  .language-div {
    position: absolute;
    top: 2rem;
    left: 2rem;
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
    .CSS {
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

const style = {
  width: "250px",
  color: "#000",
};

const GeneralCode = ({ title, description, language, code }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const codeTrim = code.length > 20 ? code.substring(0, 40) + "..." : code;
  const codeDescription =
    description.length > 20 ? description.substring(0, 110) + "..." : description;
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

      <button
        type="button"
        className="btn-code"
        onClick={() => {
          openModal();
          console.log("clicked");
        }}>
        <div className="card">
          <div className="first-state-card">
            <div className="language-div">
              {language === "JavaScript" ? (
                <div className="language javaScript icon">
                  <IoLogoJavascript style={style} />
                </div>
              ) : language === "React" ? (
                <div className="language react icon">{language}</div>
              ) : language === "CSS" ? (
                <div className="language CSS icon">
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
            </div>
          </div>
          <CodeBlock>{codeTrim}</CodeBlock>
          <p className="description">{codeDescription}</p>
        </div>
      </button>
    </StyledGeneralCode>
  );
};

export default GeneralCode;
