"use client";


import React, { createContext, useContext, useState } from "react";

const TokenContext = createContext();

export const AuthProvider = ({ children }) => {
  // You can initialize the token from localStorage, cookies, or leave it null
  const [token, setToken] = useState(null);

  // Optionally, add logic to fetch/set token here

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
