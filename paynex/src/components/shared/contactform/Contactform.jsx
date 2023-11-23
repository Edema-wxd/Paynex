import React from "react";
import style from "./Contactform.module.css";

function Contactform() {
  return (
    <div className={style.Contactform}>
      <form action="">
        <input required type="text" name="" id="" placeholder="Full name" />
        <input required type="email" name="" id="" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="How can we help you?"
        ></textarea>
        <button type="submit">Request</button>
      </form>
    </div>
  );
}

export default Contactform;
