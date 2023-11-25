import React from "react";
import style from "./Cslider.module.css";
import Moneycard from "../cards/Moneycard";

function Cslider() {
  return (
    <div className={style.Cslider}>
      <div className={style.CSheader}>
        <p>Cards</p>
        <img src="" alt="" />
      </div>
      <div className={style.Merry}>
        <Moneycard />
        <Moneycard />
        <Moneycard />
        <Moneycard />
        <Moneycard />
        <Moneycard />
        <Moneycard />
      </div>
    </div>
  );
}

export default Cslider;
