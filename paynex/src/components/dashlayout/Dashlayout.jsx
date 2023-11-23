import React, { useContext } from "react";
import style from "./Dashlayout.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Gcontext from "../../context/Gcontext";

function Dashlayout() {
  const { logout } = useContext(Gcontext);
  const navigate = useNavigate();
  const signout = () => {
    logout();
    navigate("/");
  };

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
      <div onClick={signout}>
        <p>Sign out</p>
      </div>
    </div>
  );
}

export default Dashlayout;
