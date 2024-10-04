import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../hooks/useAPI";

export default function RedirectIfAuthenticated({ children }) {
  const navigate = useNavigate();
  const { token, isLoggedIn } = useAPI();
  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem("userToken");

    if ((tokenLocalStorage || token, isLoggedIn)) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);
  return children;
}
