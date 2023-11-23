import React from "react";
import style from "./Profile.module.css";
import Headercard from "../shared/cards/Headercard";

function Profile() {
  return (
    <div className="DProfile">
      <Headercard />
      <div>
        <div>
          <p></p>
          <input type="text" />
          <img src="" alt="" />
        </div>
        <div>
          <p></p>
          <input type="text" />
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
