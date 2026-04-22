"use client";


import React, { createContext, useContext, useState, useEffect } from "react";

const TokenContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Try to load token from localStorage on mount
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export function useToken() {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within an AuthProvider");
  }
  return context.token;
}

export default AuthProvider;
