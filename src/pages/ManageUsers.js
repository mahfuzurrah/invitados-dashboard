import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import ManageUserTable from '../components/table/ManageUserTable'

export default function ManageRoles() {
  return (
    <>
      <section>
        <div className="container">
          <div className="table_area mt-3">
            <div className="table_header">
              <h2>Manage users</h2>
              <Link to="#">
                View all
                <GrFormNextLink className="icons" />
              </Link>
            </div>
            <ManageUserTable />
          </div>
        </div>
      </section>
    </>
  );
}
