import React from "react";
import Backarrow from "../shared/backarrow/Backarrow";
import style from "./Transfer.module.css";
import credit from "../../assets/images/credit.svg";
import wallet from "../../assets/images/wallet.svg";
import Headercard from "../shared/cards/Headercard";
import Transmod from "../shared/transmod/Transmod";

function Transfer() {
  var start = (
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
  var two = (
    <div className={style.Transfer}>
      <div>
        <Headercard>
          <img src={credit} alt="" />
          <p>Enter the account information</p>
        </Headercard>
        <div className={style.TBbox}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter the Account Number"
          />
          <button className={style.TBbtn}>Next</button>
        </div>
      </div>
    </div>
  );
  var three = <Transmod mode={"success"} />;
  var four = (
    <div className={style.Transfer}>
      <div>
        <Headercard>
          <img src={credit} alt="" />
          <p>Check the transfer details</p>
        </Headercard>
        <div className={style.TBbox}>
          <div className={style.TBTxt}>
            <p className={style.TBThtxt}>The information is correct?</p>
            <div>
              <div>
                <p className={style.TBTsubtxt}>Amount to transfer </p>
                <h6>$ 500.00</h6>
              </div>
              <div>
                <p className={style.TBTsubtxt}>To </p>
                <p className={style.TBTinfotxt}>Juliet Carolina Sosa </p>
                <p className={style.TBTinfotxt}>Stanbic IBTC</p>
                <p className={style.TBTinfotxt}>CVU 0000003100068949510855 </p>
              </div>
            </div>
          </div>
          <button className={style.TBbtn}>Make transfer</button>
        </div>
      </div>
    </div>
  );
  var five = <Transmod mode={"success"} />;

  return <>{four}</>;
}

export default Transfer;
