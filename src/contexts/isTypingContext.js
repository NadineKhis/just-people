import React, { createContext, useContext, useState } from "react";


const UseSpinnerContext = createContext();

export const UseSpinnerContextProvider = ({ children }) => {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <UseSpinnerContext.Provider value={{ isTyping, setIsTyping }}>
      {children}
    </UseSpinnerContext.Provider>
  );
};

export function useSpinner() {
  return useContext(UseSpinnerContext);
}
