import React from "react";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/shared/footer/Footer";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.home}>
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
