import { useAppContext } from "../../context/appContext";
import { Navigate } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/homepage" />;
  }
  return children;
};

export default ProtectedPage;
