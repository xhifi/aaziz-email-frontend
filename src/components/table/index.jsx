"use client";

import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Index = () => {
  const { gState, setGState } = useContext(GlobalContext);

  return (
    <table className="table table-striped table-hover rounded overflow-hidden">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Sector</th>
          <th>Subscribed</th>
        </tr>
      </thead>
      <tbody>
        {gState.contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <th>{contact.name}</th>
              <td>{contact.email}</td>
              <td>{contact.sector}</td>
              <td>{contact.subscribed_status ? "Subscribed" : "Not Subscribed"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Index;
