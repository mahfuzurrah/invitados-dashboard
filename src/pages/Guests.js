import React from "react";
import GuestsList from "../components/table/GuestsList";

export default function Guests() {
  return (
    <>
      <section>
        <div className="container">
          <div className="table_area">
            <div className="table_header">
              <h2>Lista de invitados</h2>
            </div>
            <GuestsList />
          </div>
        </div>
      </section>
    </>
  );
}
