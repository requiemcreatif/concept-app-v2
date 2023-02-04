import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";
import { useAppContext } from "../../context/appContext";
import DeleteConfirm from "../generalComponents/DeleteConfirm";
//import CodeInformation from "./CodeInformation";

export const StyledSingleCode = styled.div`
  font-size: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "title language description code footer";
  align-items: center;
  justify-content: center;
  color: #053651;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: auto;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "title language"
      "description description"
      "code code"
      "footer footer";
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    grid-gap: 0rem;
  }
  .title {
    grid-area: title;
    display: grid;
  }

  .description {
    grid-area: description;
  }

  .code {
    grid-area: code;
  }

  .language-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .language {
    grid-area: language;
  }

  .btn-delete {
    background-color: #9a1750;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }

  .edit {
    text-decoration: none;
    font-size: 1.2rem;
    border: 1px solid #00afb9;
    padding: 0.6rem 2rem;
    border-radius: 8px;
    background-color: #00afb9;
    color: #fff;
  }

  .status {
    color: #9a1750;
  }

  .footer {
    grid-area: footer;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    //margin-top: 3rem;
    //box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;

const SingleCode = ({
  _id,
  createdAt,
  title,
  description,
  language,
  code,
  codeStatus,
  codeId,
  toggleTheme,
  isDarkTheme,
}) => {
  const { setEditCode, deleteCode } = useAppContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const removeModal = () => setModalIsOpen(true, console.log("show"));
  const handleClose = () => setModalIsOpen(false, console.log("closed"));
  const codeTrim = code.length > 20 ? code.substring(0, 20) + "..." : code;
  const codeDescription =
    description.length > 20 ? description.substring(0, 20) + "..." : description;
  return (
    <div>
      {modalIsOpen && <DeleteConfirm onClick={handleClose} deleteCode={deleteCode} _id={_id} />}
      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
        <StyledSingleCode className="card">
          <p className="language">{language}</p>
          <h4 className="title">{title}</h4>
          <p className="description">{codeDescription}</p>
          <p className="code">{codeTrim}</p>
          <footer className="footer">
            <Link className="edit" to="/add-codes" onClick={() => setEditCode(_id)}>
              Edit
            </Link>

            <button className="btn-delete" onClick={removeModal}>
              Delete
            </button>
            <div className="status">{codeStatus}</div>
          </footer>
        </StyledSingleCode>
      </motion.div>
    </div>
  );
};

export default SingleCode;
