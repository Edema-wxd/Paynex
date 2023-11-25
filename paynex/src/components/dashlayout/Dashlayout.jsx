import React, { useContext } from "react";
import style from "./Dashlayout.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Gcontext from "../../context/Gcontext";
import home from "../../assets/images/home.svg";
import profile from "../../assets/images/profile.svg";
import help from "../../assets/images/help.svg";
import album from "../../assets/images/albums.svg";
import cards from "../../assets/images/cards.svg";
import loggout from "../../assets/images/log-out.svg";

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
        <Link to="/dashboard">
          <img src={home} alt="" />
          <p>Home</p>
        </Link>
        <Link to="/dashboard/profile">
          <img src={profile} alt="" />
          <p>My Profile</p>
        </Link>
        <Link to="/dashboard/help">
          <img src={help} alt="" />
          <p>Help</p>
        </Link>
      </div>
      <div>
        <Link to="/dashboard/activity">
          <img src={album} alt="" />
          <p>Activity</p>
        </Link>
        <Link to="/dashboard/cards">
          <img src={cards} alt="" />
          <p>Cards</p>
        </Link>
      </div>
      <div className={style.DLlogout} onClick={signout}>
        <img src={loggout} alt="" />
        <p>Sign out</p>
      </div>
    </div>
  );
}

export default Dashlayout;
