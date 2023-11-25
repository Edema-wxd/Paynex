import React from "react";
import style from "./Headercard.module.css"

function Headercard({children}) {
  return <div className={style.Headercard}>{children}</div>;
}

export default Headercard;
