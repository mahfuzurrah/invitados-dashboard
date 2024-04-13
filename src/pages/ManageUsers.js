import React from "react";
import ManageUserTable from '../components/table/ManageUserTable'
import AddUserPopup from "../components/Modal/AddUserPopup";

export default function ManageRoles() {
  return (
    <>
      <section>
        <div className="container">
          <div className="table_area mt-3">
            <div className="table_header">
              <h2>Manage users</h2>
              <AddUserPopup/>
            </div>
            <ManageUserTable />
          </div>
        </div>
      </section>
    </>
  );
}
