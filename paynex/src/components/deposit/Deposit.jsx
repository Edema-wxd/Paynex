import React from "react";
import Headercard from "../shared/cards/Headercard";
import Backarrow from "../shared/backarrow/Backarrow";
import cardg from "../../assets/images/cardg.svg";
import coins from "../../assets/images/coins.svg";
import stack from "../../assets/images/money.svg";
import Transmod from "../shared/transmod/Transmod";
import style from "./Deposit.module.css";
import Moneycard from "../shared/cards/Moneycard";

function Deposit() {
  var start = (
    <div className={style.Deposit}>
      <Backarrow />
      <Headercard>
        <img src={stack} alt="" />
        <p>Select a payment method</p>
      </Headercard>
      <div className={style.DOcards}>
        <Headercard>
          <img src={cardg} alt="" />
          <p>Debit</p>
        </Headercard>
        <Headercard>
          <img src={coins} alt="" />
          <p>Cash</p>
        </Headercard>
      </div>
    </div>
  );
  var depo = (
    <div className={style.Deposit}>
      <Backarrow />
      <Headercard>
        <img src={stack} alt="" />
        <p>Where do you want to deposit money from?</p>
      </Headercard>
      <div className={style.DOMcards}>
        <Moneycard type={"display"} /> <Moneycard type={"display"} />{" "}
        <Moneycard type={"display"} /> <Moneycard type={"display"} />
      </div>
    </div>
  );
  var paymod = (
    <div className={style.Deposit}>
      <Transmod />
    </div>
  );
  var success = (
    <div className={style.Deposit}>
      <Transmod mode={"success"} />
    </div>
  );

  return <>{success}</>;
}

export default Deposit;
