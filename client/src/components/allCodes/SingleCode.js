import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";
import { useAppContext } from "../../context/appContext";
//import CodeInformation from "./CodeInformation";

const StyledSingleCode = styled.div`
  color: #00afb9;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 10px;
  //width: 375px;
  height: auto;
  padding: 3rem;
  text-align: center;
  margin-bottom: 20px;

  h3 {
    padding: 2rem;
    margin-bottom: 10px;
    font-weight: 400;
    color: #1e6091;
  }

  .copyIcon {
    //position: absolute;
    display: flex;
    justify-content: flex-end;
    padding: 0 1rem;
    cursor: pointer;
  }

  .code-div {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem 0;
    color: #1e6091;
  }

  footer {
    border: 1px solid #00afb9;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
  }
`;

const SingleCode = ({ _id, createdAt, title, description, language, code, codeStatus, codeId }) => {
  const { setEditCode, deleteCode } = useAppContext();
  return (
    <StyledSingleCode>
      <div className="copyIcon">
        <MdContentCopy />
      </div>

      <div>
        <p>{language}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="code-div">{code}</div>
      <div>{codeStatus}</div>
      <footer>
        <Link to="/add-codes" onClick={() => setEditCode(_id)}>
          Edit
        </Link>
        <button type="button" onClick={() => deleteCode(_id)}>
          Delete
        </button>
      </footer>
    </StyledSingleCode>
  );
};

export default SingleCode;
