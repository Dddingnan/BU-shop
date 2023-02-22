import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logout } from ".././firebase";

function onAuthStateChange(callback, navigate) {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("------", user.displayName, user.email);
      console.log("The user is logged in");
      callback({ userName: user.displayName, loggedIn: true });
    } else {
      console.log("The user is not logged in");
      callback({ userName: "", loggedIn: false });
      navigate("/login");
    }
  });
}

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ userName: "", loggedIn: false });

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser, navigate);
    return () => {
      unsubscribe();
    };
  }, [navigate]);
  return (
    <>
      <div>Dashboard</div>
      <button onClick={() => logout()}>Log Out</button>
    </>
  );
}

export default Dashboard;
