import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CodeBlockUser from "../CodeBlockUser";
import PageBtn from "../../../components/generalComponents/PageBtn";
import { useAppContext } from "../../../context/appContext";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegHandPointer } from "react-icons/fa";
import { Modal, ModalContent } from "../userModal";
import "./codeDisplay.css";

const CodeWrapper = styled.div`
  margin: 8rem auto 0 auto;
  max-width: 1200px;
  //padding: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;

  .user-codes {
    .code-title {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 500;
    }

    .code-status {
      text-align: center;
      font-size: 1.2rem;
    }
  }

  .code-to-display {
    margin-top: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
    }
  }

  .counter {
    padding: 2rem;
  }
  .total-div {
    text-align: center;
    border-bottom: 1px solid #053651;
    max-width: 500px;
    margin: 0 auto;
  }

  .total-codes {
    text-align: center;
    padding: 3rem;
  }

  .modal-btn {
    padding: 2rem;
    display: flex;
    gap: 1rem;
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

  .edit {
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.6rem 2rem;
    border-radius: 8px;
    background-color: #1d293b;
    color: #fff;
  }
`;

const CodeDisplay = ({ description, code }) => {
  const {
    getCodes,
    codes,

    isLoading,
    totalCodes,

    setEditCode,
    deleteCode,
    numOfPages,
    page,
  } = useAppContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [codeToDelete, setCodeToDelete] = useState({});

  const removeModal = (code) => {
    setModalIsOpen(true);
    setCodeToDelete(code);
  };

  const handleClose = () => setModalIsOpen(false);

  const confirmDelete = () => {
    deleteCode(codeToDelete._id);
    setModalIsOpen(false);
  };

  useEffect(() => {
    getCodes();
  }, [page]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (codes.length === 0) {
    return <h1>No codes found</h1>;
  }

  const codesToDisplay = codes.map((code) => (
    <motion.div
      className="user-code-container"
      key={code._id}
      whileHover={{ scale: 1.05, cursor: <FaRegHandPointer /> }}
      transition={{ duration: 0.3 }}>
      <div className="user-codes">
        <p className="code-title">{code.title}</p>

        {/* <p className="code-lang">{code.language}</p> */}
        {/* <p className="code-desc">{code.description.substring(0, 50)}</p> */}
        {/* <CodeBlockUser>{code.code.substring(0, 40)}</CodeBlockUser> */}
        <p className="code-status">{code.codeStatus}</p>
      </div>

      <div className="btns-user">
        <Link className="edit" to="/add-codes" onClick={() => setEditCode(code._id)}>
          Edit
        </Link>

        <button className="btn-delete" onClick={() => removeModal(code)}>
          Delete
        </button>
        {/* <p className="code-status">{code.codeStatus}</p> */}
      </div>
    </motion.div>
  ));

  return (
    <CodeWrapper className="global-text">
      {modalIsOpen && (
        <Modal onClick={handleClose} className="show">
          <ModalContent className="show">
            <h3>Are you sure you want to delete this code?</h3>
            <div className="modal-btn">
              <button className="delete" onClick={confirmDelete}>
                Yes
              </button>
              <button className="cancel" onClick={handleClose}>
                No
              </button>
            </div>
          </ModalContent>
        </Modal>
      )}

      <div className="total-div">
        <h3 className="total-codes">
          Congratulations!! You submitted {totalCodes} code{codes.length > 1 && "s"}
        </h3>
        <div className="counter">{numOfPages > 1 && <PageBtn />}</div>
        {/* {console.log(" numOfPages:", page)} */}
      </div>
      <AnimatePresence>
        <motion.div
          key={page}
          exit={{ opacity: 0, y: -50 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="code-to-display">
          {codesToDisplay}
        </motion.div>
      </AnimatePresence>
    </CodeWrapper>
  );
};

export default CodeDisplay;
