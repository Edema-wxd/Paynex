import React from "react";
import style from "./Dashlayout.module.css";
import { Link } from "react-router-dom";

function Dashlayout() {
  return (
    <div className={style.Dashlayout}>
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/help">Help</Link>
      </div>
      <div>
        <Link to="/dashboard/activity">Activity</Link>
        <Link to="/dashboard/cards">Cards</Link>
      </div>
      <div>
        <p>Sign out</p>
      </div>
    </div>
  );
}

export default Dashlayout;
