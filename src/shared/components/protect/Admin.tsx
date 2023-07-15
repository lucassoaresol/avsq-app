import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts";

export const ProtectedAdmin = () => {
  const { userData } = useAuthContext();

  return userData?.role === "ADMIN" ? <Outlet /> : <Navigate replace to="/" />;
};
