import { useAppContext } from "../../context/appContext";
//import styled from "styled-components";
import "../../App.css";

const AlertMessage = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      <p>{alertText}</p>
    </div>
  );
};

export default AlertMessage;
