import React from "react";
import Backarrow from "../shared/backarrow/Backarrow";
import style from "./Transfer.module.css";
import credit from "../../assets/images/credit.svg";
import wallet from "../../assets/images/wallet.svg";
import Headercard from "../shared/cards/Headercard";

function Transfer() {
  var two = (
    <div className={style.Transfer}>
      <div>
        <Headercard>
          <img src={credit} alt="" />
          <p>Enter the account information</p>
        </Headercard>
        <Headercard>
          <img src={wallet} alt="" />
          <div>
            <p>OBT/IBT/Debit Card</p>
            <p className={style.Tsubtxt}>To digital or bank accounts</p>
          </div>
        </Headercard>
      </div>
    </div>
  );

  return (
    <div className={style.Transfer}>
      <Backarrow />
      <div>
        <Headercard>
          <img src={credit} alt="" />
          <p>Select a transfer method</p>
        </Headercard>
        <Headercard>
          <img src={wallet} alt="" />
          <div>
            <p>OBT/IBT/Debit Card</p>
            <p className={style.Tsubtxt}>To digital or bank accounts</p>
          </div>
        </Headercard>
      </div>
    </div>
  );
}

export default Transfer;
