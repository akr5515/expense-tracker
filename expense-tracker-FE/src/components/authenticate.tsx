import { Navigate, Outlet } from "react-router-dom";
import { useAuthHook } from "../hooks/useAuthHook";

const Authenticate = () => {
  const { token } = useAuthHook();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Authenticate;
