import React from "react";
import Headercard from "../shared/cards/Headercard";
import Noticecard from "../shared/cards/Noticecard";
import style from "./Activities.module.css";

function Activities() {
  return (
    <div className={style.Activities}>
      <Headercard>
        <p>Activity</p>
      </Headercard>
      <div>
        <Noticecard type={"debit"} amount={590} user={"John Mark"} />
        <Noticecard type={"debit"} amount={590} user={"John Mark"} />
        <Noticecard type={"debit"} amount={590} user={"John Mark"} />
      </div>
    </div>
  );
}

export default Activities;
