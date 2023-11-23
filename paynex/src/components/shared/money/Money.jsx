import React from "react";
import style from "./Money.module.css";
import { Link } from "react-router-dom";
import eye from "../../../assets/images/eye.svg";

function Money() {
  return (
    <div className={style.Money}>
      <div>
        <div>
          <p>Available money</p>
          <Link>
            <button>My info</button>
          </Link>
        </div>
        <div>
          <h2>$</h2>
          <img src={eye} alt="" />
        </div>
      </div>
      <div className={style.Mnav}>
        <Link to="/dashboard/deposit">
          <button className={style.green}>Deposit Money</button>
        </Link>
        <Link to="/dashboard/transfer">
          <button>Transfer Money</button>
        </Link>
      </div>
    </div>
  );
}

export default Money;
