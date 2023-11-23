import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import style from "./Dashboard.module.css";
import Dashlayout from "../../components/dashlayout/Dashlayout";
import Maindash from "../../components/maindash/Maindash";

function Dashboard() {
  let location = useLocation();
  var dump;
  if (location.pathname === "/dashboard") {
    dump = (
      <>
        <Maindash />
      </>
    );
  } else {
    dump = <Outlet />;
  }

  return (
    <div className={style.Dashboard}>
      <Dashlayout />
      {dump}
    </div>
  );
}

export default Dashboard;
