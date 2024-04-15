import React from "react";
import ManageRoleTable from "../components/table/ManageRoleTable";

export default function ManageRoles() {
  return (
    <>
      <section>
        <div className="container">
          <div className="table_area">
            <div className="table_header">
              <h2>Manage Roles</h2>
            </div>
            <ManageRoleTable />
          </div>
        </div>
      </section>
    </>
  );
}
