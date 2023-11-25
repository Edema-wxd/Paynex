import React from "react";
import style from "./Moneycard.module.css";
import mastercard from "../../../assets/images/mastercard.svg";

function Moneycard() {
  return (
    <div className={style.Moneycard}>
      <p className={style.MCCardno}>XXXX XXXX XXXX 0329</p>
      <div className={style.MCCardinfo}>
        <div className={style.MCCdataholder}>
          <p className={style.MCCsubtxt}>Name</p>
          <p>Julieta Carolina Sosa</p>
        </div>
        <div className={style.MCCdataholder}>
          <p className={style.MCCsubtxt}>expires</p>
          <p>10/28</p>
        </div>
        <img src={mastercard} alt="" />
      </div>
    </div>
  );
}

export default Moneycard;
