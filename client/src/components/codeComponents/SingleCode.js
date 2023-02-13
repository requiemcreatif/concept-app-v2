import styled from "styled-components";

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

  /* .btn-delete {
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
  } */

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
  description,

  code,
}) => {
  return <div></div>;
};

export default SingleCode;
