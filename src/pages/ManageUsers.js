import React from "react";
import AddUserPopup from "../components/Modal/AddUserPopup";
import ManageUserTable from "../components/table/ManageUserTable";

export default function ManageRoles() {
  return (
    <>
      <section>
        <div className="container">
          <div className="table_area">
            <div className="table_header">
              <h2>Manage users</h2>
              <AddUserPopup />
            </div>
            <ManageUserTable />
          </div>
        </div>
      </section>
    </>
  );
}
