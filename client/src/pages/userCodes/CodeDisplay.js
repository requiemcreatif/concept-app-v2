import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CodeBlockUser from "../userCodes/CodeBlockUser";
import PageBtn from "../../components/generalComponents/PageBtn";
import Div from "../../pages/dashboard/Dashboard";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import { motion } from "framer-motion";
import Profile from "../profile/Profile";
import { FaHandPointer, FaRegHandPointer } from "react-icons/fa";

const Modal = styled.div`
   {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
`;

const ModalContent = styled.div`
   {
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 30px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const CodeWrapper = styled.div`
  margin: 6rem auto 0 auto;
  .counter {
    padding: 2rem;
  }
  .total-div {
    text-align: center;
    border-bottom: 1px solid #00afb9;
    max-width: 1300px;
    margin: 0 auto;
  }

  .total-codes {
    text-align: center;
    padding: 3rem;
  }

  .modal-btn {
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

const TableCode = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 2rem 0;

  table {
    width: 100%;
    overflow: hidden;
    border-spacing: 1rem;
    margin: 0 auto;
    max-width: 1400px;
    text-align: center;
  }

  .tbody {
  }

  th {
    padding: 2rem;
    background-color: #1d293b;
    color: #fff;
  }

  td {
    padding: 1rem;
    font-size: 1.5rem;
  }

  tr {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    cursor: pointer;
  }

  .status {
    color: #9a1750;
  }

  .action {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const CodeDisplay = ({ description, code }) => {
  const {
    getCodes,
    codes,
    codeStatus,
    isLoading,
    totalCodes,
    language,
    title,
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
    <motion.tr
      key={code._id}
      whileHover={{ scale: 1.01, cursor: <FaRegHandPointer /> }}
      transition={{ duration: 0.3 }}>
      <td>
        <p>{code.title}</p>
      </td>
      <td>
        <p>{code.language}</p>
      </td>
      <td>
        <p>{code.description.substring(0, 100)}</p>
      </td>
      <td>
        <CodeBlockUser>{code.code.substring(0, 40)}</CodeBlockUser>
      </td>
      <td>
        <p className="status">{code.codeStatus}</p>
      </td>
      <td className="action">
        <Link className="edit" to="/add-codes" onClick={() => setEditCode(code._id)}>
          Edit
        </Link>
        <button className="btn-delete" onClick={() => removeModal(code)}>
          Delete
        </button>
      </td>
    </motion.tr>
  ));

  return (
    <CodeWrapper className="global-text">
      {modalIsOpen && (
        <Modal>
          <ModalContent>
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
      <TableCode>
        <table>
          <thead>
            <tr>
              <th className="title">Title</th>
              <th className="language">Language</th>
              <th className="description">Description</th>
              <th className="code">Code</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{codesToDisplay}</tbody>
        </table>
      </TableCode>
      {/* <Profile /> */}
    </CodeWrapper>
  );
};

export default CodeDisplay;
