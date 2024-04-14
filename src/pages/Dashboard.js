import React, { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import cal from "../components/assets/svg/calandar.svg";
import user from "../components/assets/svg/users.svg";
import RegistrationList from "../components/table/RegistrationList";

function Dashboard() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-05-01T00:00:00");
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12">
              <div className="card">
                <div className="text">
                  <p>Upcoming Events</p>
                  <div className="time">
                    <h1>{countdown.days}</h1> d
                    <h1>{countdown.hours}</h1> h
                    <h1>{countdown.minutes}</h1> m
                    <h1>{countdown.seconds}</h1> s
                  </div>
                </div>
                <img src={cal} alt="Icon" />
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="card">
                <div className="text">
                  <p>Accepted Invitation</p>
                  <h1>500</h1>
                </div>
                <img src={user} alt="Icon" />
              </div>
            </div>
          </div>
          <div className="table_area mt-3">
            <div className="table_header">
              <h2>Recent Registration List</h2>
              <Link to="/guests_list">
                View all
                <GrFormNextLink className="icons" />
              </Link>
            </div>
            <RegistrationList />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
