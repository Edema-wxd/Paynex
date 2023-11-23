import React from "react";
import Headercard from "../shared/cards/Headercard";
import Dashcard from "../shared/cards/Dashcard";
import Addcard from "../shared/addcard/Addcard";

function Usercard() {
  return (
    <>
      <Headercard />
      <Dashcard />
      <button>
        <img src="" alt="" />
        Add Card
      </button>
      <Addcard/>
    </>
  );
}

export default Usercard;
