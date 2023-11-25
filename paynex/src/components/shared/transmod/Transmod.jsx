import React from "react";
import style from "./Transmod.module.css";
import confetti from "../../../assets/images/success.svg";
import { Link } from "react-router-dom";

function Transmod({ mode }) {
  var base = (
    <div>
      <div className={style.DPeposit}>
        <div className={style.DPhead}>
          <p>Enter the amount you wish to deposit</p>
        </div>
        <div>
          <h2>$ 0,00</h2>
        </div>
        <div>
          <div className={style.DPBsmall}>
            <button>$500</button>
            <button>$1000</button>
            <button>$1500</button>
          </div>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
  var success = (
    <div className={style.DPeposit}>
      <div className={style.DPhead}>
        <h4>
          Ready! <br />
          Transfer was successful
        </h4>
      </div>
      <div>
        <img src={confetti} alt="" />
      </div>
      <div>
        <Link to="/dashboard">
          <button className={style.DPBsuccess}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
  if (mode === "success") {
    return <>{success}</>;
  } else {
    return <>{base}</>;
  }
}

export default Transmod;
