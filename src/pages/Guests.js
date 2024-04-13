import React from "react";
import GuestsList from '../components/table/GuestsList'

export default function Guests() {
  return (
    <>
      <section>
        <div className="container">
          <div className="table_area mt-3">
            <div className="table_header">
              <h2>Guests List</h2>
            </div>
            <GuestsList />
          </div>
        </div>
      </section>
    </>
  );
}
