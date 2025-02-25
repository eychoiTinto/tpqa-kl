import React, { createContext, useContext, useState } from "react";

// Create the context
const NavbarContext = createContext({});

// Create a provider component
export const NavbarProvider = ({ children }) => {
  const [navbarColor, setNavbarColor] = useState("#F0F0F0");

  return (
    <NavbarContext.Provider value={{ navbarColor, setNavbarColor }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Create a custom hook for easy access
export const useNavbarContext = () => useContext(NavbarContext);
