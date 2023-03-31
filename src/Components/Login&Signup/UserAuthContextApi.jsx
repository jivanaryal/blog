import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserAuthContext = createContext();

function UserAuthContextApi({ children }) {
  const navigate = useNavigate();
  const [Token, setToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      navigate("/");
    } else {
      navigate("/login");
      console.log("dsd");
    }
  }, [localStorage]);
  return (
    <UserAuthContext.Provider
      value={{ name: "kisan", tkn: localStorage.getItem("token") }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthContextApi;
