import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import GuestsList from '../components/table/GuestsList'

export default function Guests() {
  return (
    <>
      <section>
        <div className="container">
          <div className="table_area mt-3">
            <div className="table_header">
              <h2>Guests List</h2>
              <Link to="#">
                View all
                <GrFormNextLink className="icons" />
              </Link>
            </div>
            <GuestsList />
          </div>
        </div>
      </section>
    </>
  );
}
