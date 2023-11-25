import React from "react";
import style from "./Noticecard.module.css";
import credit from "../../../assets/images/credit.svg";
import debit from "../../../assets/images/debit.svg";

function Noticecard({ user, type, amount }) {
  var box;
  if (type === "credit") {
    box = (
      <div className={style.Credit}>
        <div className={style.NCdets}>
          <img src={credit} alt="" />
          <div>
            <p className={style.NCnote}>You received a transfer</p>
            <p className={style.NCuser}>{user}</p>
          </div>
        </div>
        <div className={style.Amount}>
          <p className={style.Amoney}>${amount}</p>
          <p>09 August</p>
        </div>
      </div>
    );
  } else {
    box = (
      <div className={style.Debit}>
        <div className={style.NCdets}>
          <img src={debit} alt="" />
          <div>
            <p className={style.NCnote}>You made a transfer</p>
            <p className={style.NCuser}>{user}</p>
          </div>
        </div>
        <div className={style.Amount}>
          <p className={style.Amoney}>-${amount}</p>
          <p>09 August</p>
        </div>
      </div>
    );
  }
  return <div className={style.Noticecard}>{box}</div>;
}

export default Noticecard;
