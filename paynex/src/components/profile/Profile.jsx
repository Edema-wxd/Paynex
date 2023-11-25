import React from "react";
import style from "./Profile.module.css";
import Headercard from "../shared/cards/Headercard";
import profileg from "../../assets/images/profile.svg";

function Profile() {
  return (
    <div className={style.DProfile}>
      <Headercard>
        <img src={profileg} alt="" />
        <p>Hello Juliet!</p>
      </Headercard>
      <div className={style.DPinfo}>
        <div>
          <p>Acc. No</p>
          <input type="text" />
          <img src="" alt="" />
        </div>
        <div>
          <p>Acc. Name</p>
          <input type="text" />
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <Headercard>
          <img src="" alt="" />
          <p>My Personal Information</p>
        </Headercard>
        <Headercard>
          <img src="" alt="" />
          <p>Privacy</p>
        </Headercard>
      </div>
    </div>
  );
}

export default Profile;
