"use client";

import { useContext, useEffect, useState } from "react";
import { DirectoryContext } from "@/contexts/DirectoryContext";
import { PROPAGATE_CONTACTS, SET_ERROR, TOGGLE_LOADING } from "@/contexts/reducers/actions/directoryActions";

const Page = () => {
  const { state, dispatch } = useContext(DirectoryContext);
  const { contacts, loading, error } = state;

  const propagateContacts = async () => {
    dispatch({ type: TOGGLE_LOADING });
    try {
      const res = await fetch("http://localhost:1234/api/v1/");
      const data = await res.json();
      dispatch({ type: PROPAGATE_CONTACTS, payload: data.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
    dispatch({ type: TOGGLE_LOADING });
  };

  useEffect(() => {
    propagateContacts();
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <ul>
        {state.contacts?.map((contact, index) => {
          return (
            <li key={index}>
              {contact.name}: {contact.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
