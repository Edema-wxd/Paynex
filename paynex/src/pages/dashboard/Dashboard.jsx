import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Dashboard.module.css";
import Dashlayout from "../../components/dashlayout/Dashlayout";

function Dashboard() {
  return (
    <div className={style.Dashboard}>
      <Dashlayout />
      <Outlet />
    </div>
  );
}

export default Dashboard;
