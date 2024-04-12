import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import ManageRoleTable from '../components/table/ManageRoleTable'

export default function ManageRoles() {
  return (
    <>
      <section>
        <div className="container">
          <div className="table_area mt-3">
            <div className="table_header">
              <h2>Manage Roles</h2>
              <Link to="#">
                View all
                <GrFormNextLink className="icons" />
              </Link>
            </div>
            <ManageRoleTable />
          </div>
        </div>
      </section>
    </>
  );
}
