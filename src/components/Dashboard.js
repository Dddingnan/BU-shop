import React from "react";
import { logout } from ".././firebase";

function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => logout()}>Log Out</button>
    </>
  );
}

export default Dashboard;
