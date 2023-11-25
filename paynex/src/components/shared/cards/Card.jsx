import React from "react";
import style from "./Card.module.css";

function Card({ message, subtxt, img }) {
  return (
    <div className={style.Card}>
      <div>
        <h5>{message}</h5>
        <p>{subtxt}</p>
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default Card;
