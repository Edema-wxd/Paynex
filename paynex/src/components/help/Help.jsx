import React from "react";
import Headercard from "../shared/cards/Headercard";
import Contactform from "../shared/contactform/Contactform";

function Help() {
  return (
    <div>
      <Headercard />
      <div className="Helpmain">
        <Contactform />
      </div>
    </div>
  );
}

export default Help;
