import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SingleCode from "../../components/codeComponents/SingleCode";
import DeleteConfirm from "../../components/generalComponents/DeleteConfirm";
import { useAppContext } from "../../context/appContext";
import styled from "styled-components";
import Profile from "../profile/Profile";

const CodeWrapper = styled.div`
  margin: 0 auto;

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
    //border: 1px solid #00afb9;
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
    //border-collapse: collapse;
    //border: 1px solid #00afb9;
    border-radius: 0.5rem;
    overflow: hidden;
    border-spacing: 1rem;
    //box-shadow: 0 0 0.5rem #0001;
    margin: 0 auto;
    max-width: 1400px;
    text-align: center;
  }

  th {
    padding: 2rem;
    background-color: #1d293b;
    color: #fff;
  }

  td {
    padding: 1rem;
    //border: 4px solid #00afb9;
    //box-shadow: 0 0 0.5rem #0001;
    //border-radius: 1rem;
    font-size: 1.5rem;
  }

  tr {
    padding: 2rem;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
  }

  .status {
    color: #9a1750;
  }
`;

// const CodeContainer = styled.div`
//   margin: 0 auto;
//   padding: 3rem;

//   h3 {
//     text-align: center;
//   }
// `;

// const StyledCodeDisplay = styled.div`
//   max-width: 1400px;
//   display: grid;
//   grid-template-columns: 1fr;
//   margin: 1rem auto;
//   //gap: 0.5;
//   //opacity: 0;
//   transition: opacity 0.5s ease-in-out;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     padding: 0 2rem;
//   }
// `;

const CodeDisplay = ({ _id, deleteCode, description, code }) => {
  const { getCodes, codes, codeStatus, isLoading, totalCodes, language, title, setEditCode } =
    useAppContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const removeModal = () => setModalIsOpen(true, console.log("show"));
  const handleClose = () => setModalIsOpen(false, console.log("closed"));
  // const codeTrim = code.length > 20 ? code.substring(0, 20) + "..." : code;
  // const codeDescription =
  //   description.length > 20 ? description.substring(0, 20) + "..." : description;

  useEffect(() => {
    getCodes();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (codes.length === 0) {
    return <h1>No codes found</h1>;
  }

  const codesToDisplay = codes.map((code) => (
    <tr key={code._id}>
      <td>
        <p>{code.title}</p>
      </td>
      <td>
        <p>{code.language}</p>
      </td>
      <td>
        <p>{code.description}</p>
      </td>
      <td>
        <p>{code.code}</p>
      </td>
      <td>
        <p className="status">{code.codeStatus}</p>
      </td>
      <td>
        <Link className="edit" to="/add-codes" onClick={() => setEditCode(_id)}>
          Edit
        </Link>
      </td>
      <td>
        <button className="btn-delete" onClick={removeModal}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <CodeWrapper className="global-text">
      {modalIsOpen && <DeleteConfirm onClick={handleClose} deleteCode={deleteCode} _id={_id} />}

      <div className="total-div">
        <h3 className="total-codes">
          Congratulations!! You submitted {totalCodes} code{codes.length > 1 && "s"}
        </h3>
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
            </tr>
          </thead>
          <tbody>{codesToDisplay}</tbody>
        </table>
      </TableCode>

      {/* <div className="head-title">
        <div>
          <p>Title</p>
        </div>
        <div>
          <p>Language</p>
        </div>
        <div>
          <p>Description</p>
        </div>
        <div>
          <p>Code</p>
        </div>
        <div>
          <p>Status</p>
        </div>
      </div>
      <CodeContainer>
        <StyledCodeDisplay>
          {codes.map((code) => {
            return <SingleCode key={code._id} {...code} />;
          })}
        </StyledCodeDisplay>
      </CodeContainer> */}
      <Profile />
    </CodeWrapper>
  );
};

export default CodeDisplay;
