"use client";

import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext(null);

const initialState = {
  contacts: [],
};

const GlobalContextProvider = ({ children }) => {
  const [gState, setGState] = useState(initialState);

  const pullContacts = async () => {
    const data = await fetch("http://localhost:1234/api/v1");
    const res = await data.json();
    setGState({ ...gState, contacts: [...res.data] });
  };

  useEffect(() => {
    pullContacts();
  }, []);

  return <GlobalContext.Provider value={{ gState, setGState }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalContextProvider };
