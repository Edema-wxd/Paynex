import React from "react";
import er404 from "../../assets/images/404.svg";
import style from "./Nopage.module.css";

function Nopage() {
  return (
    <div className={style.Nopage}>
      <h5>Oops! We're having trouble finding what you're looking for.</h5>
      <img src={er404} alt="" />
      <button>Back to Home</button>
    </div>
  );
}

export default Nopage;
