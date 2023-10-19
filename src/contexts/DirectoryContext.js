"use client";

import { createContext, useReducer, useEffect } from "react";
import directoryReducer from "./reducers/directoryReducer";

const DirectoryContext = createContext(null);

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const DirectoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(directoryReducer, initialState);

  return <DirectoryContext.Provider value={{ state, dispatch }}>{children}</DirectoryContext.Provider>;
};

export { DirectoryContext, DirectoryContextProvider };
