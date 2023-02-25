import React from "react";
import { logout } from ".././firebase";
import { useFetchData } from "../api";

function Dashboard(user) {
  const { userName } = user;
  const { data, loading } = useFetchData();
  console.log("dddd", data);
  return (
    <>
      {loading && <div>Loading</div>}
      <div>Dashboard - {userName} </div>
      <button onClick={() => logout()}>Log Out</button>
    </>
  );
}

export default Dashboard;
