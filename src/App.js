import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { auth } from "./firebase";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function onAuthStateChange(callback, navigate) {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("------", user.displayName, user.email);
      console.log("The user is logged in");
      callback({ userName: user.displayName, loggedIn: true });
      navigate("/");
    } else {
      console.log("The user is not logged in");
      callback({ userName: "", loggedIn: false });
      navigate("/login");
    }
  });
}

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ userName: "", loggedIn: false });
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser, navigate);
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <GoogleButton onClick={() => signInWithGoogle()} />
            <button onClick={() => logout()}>Log Out</button>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </header> */}
      </Routes>
    </div>
  );
}

export default App;
