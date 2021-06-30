import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://randomuser.me/api/?results=100"
      );
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <APIContext.Provider value={{ users, setUsers }}>
      {children}
    </APIContext.Provider>
  );
};

export function useAPI() {
  return useContext(APIContext);
}
