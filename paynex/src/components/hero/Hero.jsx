import React from "react";
import style from "./Hero.module.css";
import Card from "../shared/cards/Card";
import Contactform from "../shared/contactform/Contactform";
import himg from "../../assets/images/heroimg.png";
import aboutimg from "../../assets/images/aboutimg.png";

function Hero() {
  return (
    <div className={style.Hero}>
      <div id="Hero" className={style.Hbody}>
        <div className={style.Htxt}>
          <h1>The future of your finances is here</h1>
          <h4>
            Ride the wave and discover the ease of managing your money with
            PayNex
          </h4>
          <div>
            <button>Exchange Rates</button>
            <button>Transfers</button>
            <button>Debit</button>
            <button>Credit</button>
          </div>
        </div>
        <img src={himg} alt="" />
      </div>
      <div id="services">
        <h3>What can I do with PayNex?</h3>
        <div className={style.SCards}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div id="about">
        <h3>About Us</h3>
        <div className={style.Abox}>
          <div className={style.Atxt}>
            <h2>We want you to have the best experience with your finances</h2>
            <p>
              That is why our purpose is to create innovative and efficient
              solutions to accelerate the process of financial inclusion for
              people and ensure that you carry out your transactions safely.
            </p>
          </div>
          <div className={style.Aimg}>
            <img src={aboutimg} alt="" />
          </div>
        </div>
      </div>
      <div id="contact" className={style.Cbox}>
        <h3>Need help?</h3>
        <p>Enter the following information to contact you.</p>
        <Contactform />
      </div>
    </div>
  );
}

export default Hero;
