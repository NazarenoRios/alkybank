import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("last_name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("first_name");
  }

  useEffect(() => {
    logout();
    navigate("/");
  });

  return <div>Logout</div>;
};

export default Logout;
