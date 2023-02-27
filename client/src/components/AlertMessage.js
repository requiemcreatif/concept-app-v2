import { useAppContext } from "../context/appContext";
import styled from "styled-components";
import "../App.css";

const StyledAlertMessage = styled.div`
  border: none;
  border-radius: 5px;
  padding: 1rem;
  margin: 0 auto;
  max-width: 500px;
  position: absolute;
  top: 300px;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  background-color: #e3afbc;
  transition: opacity 0.5s ease-in-out;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    p {
      color: #fff;
      //font-size: 0.8rem;
    }
  }
`;

const AlertMessage = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      <p>{alertText}</p>
    </div>
  );
};

export default AlertMessage;
