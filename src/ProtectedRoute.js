import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
export const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate(redirectPath);
    }
  });
  return <Outlet />;
};
