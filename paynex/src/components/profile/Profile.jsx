import React from "react";
import style from "./Profile.module.css";
import Headercard from "../shared/cards/Headercard";
import profileg from "../../assets/images/profile.svg";
import privacy from "../../assets/images/privacy.svg";

function Profile() {
  var one = (
    <div className={style.DProfile}>
      <Headercard>
        <img src={profileg} alt="" />
        <p>Hello Juliet!</p>
      </Headercard>
      <div className={style.DPinfo}>
        <div>
          <p>Acc. No</p>
          <p>0000003100068949510855</p>
          <img src="" alt="" />
        </div>
        <div>
          <p>Acc. Name</p>
          <p>juli.22.camara</p>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <Headercard>
          <img src={profileg} alt="" />
          <p>My Personal Information</p>
        </Headercard>
        <Headercard>
          <img src={privacy} alt="" />
          <p>Privacy</p>
        </Headercard>
      </div>
    </div>
  );
  var two = (
    <div className={style.DProfile}>
      <Headercard>
        <img src={profileg} alt="" />
        <p>Personal Information</p>
      </Headercard>
      <div className={style.DPinfo}>
        <img src="" alt="" />
        <button>Change Photo</button>
      </div>
      <div className={style.DPuserinfo}>
        <div className={style.DPUtitle}>
          <div>
            <p>Name</p>
            <p>Juliet Sosa</p>
          </div>
          <div>
            <p>Phone</p>
            <p>070458698522</p>
          </div>
          <div>
            <p>Birthdate</p>
            <p>03/09/1994</p>
          </div>
          <div>
            <p>City</p>
            <p>Lagos</p>
          </div>
          <div>
            <p>Gender</p>
            <p>Female</p>
          </div>
        </div>
        <div className={style.DPUval}></div>
        <div>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
  return <> {two}</>;
}

export default Profile;
