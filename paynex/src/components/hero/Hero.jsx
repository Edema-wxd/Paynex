import React from "react";
import style from "./Hero.module.css";
import Card from "../shared/cards/Card";

function Hero() {
  return (
    <div className={style.Hero}>
      <div id="Hero">
        <div className="Htxt">
          <h1>The future of your finances is here</h1>
          <h4>
            Ride the wave and discover the ease of managing your money with
            PayNex
          </h4>
          <button>Exchange Rates</button>
          <button>Transfers</button>
          <button>Debit</button>
          <button>Credit</button>
        </div>
        <img src="" alt="" />
      </div>
      <div id="Services">
        <h3>What can I do with PayNex?</h3>
        <div className="SCards">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div id="About">
        <div className="Atxt">
          <h2>We want you to have the best experience with your finances</h2>
          <p>
            That is why our purpose is to create innovative and efficient
            solutions to accelerate the process of financial inclusion for
            people and ensure that you carry out your transactions safely.
          </p>
        </div>
        <div className="Aimg">
          <img src="" alt="" />
        </div>
      </div>
      <div id="Contact">
        <h3>Need help?</h3>
        <p>Enter the following information to contact you.</p>
        <form action="">
          <input type="text" name="" id="" placeholder="Full name" />
          <input type="email" name="" id="" placeholder="Email" />
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
    </div>
  );
}

export default Hero;
