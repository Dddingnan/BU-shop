import React, { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import { auth, signInWithGoogle, logout } from "./firebase";

function onAuthStateChange(callback) {
  return auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("------", user.displayName, user.email);
      console.log("The user is logged in");
      callback({ userName: user.displayName, loggedIn: true });
    } else {
      console.log("The user is not logged in");
      callback({ userName: "", loggedIn: false });
    }
  });
}

function App() {
  const [user, setUser] = useState({ userName: "", loggedIn: false });

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {user.userName || 123}
        </p>
        <button onClick={() => signInWithGoogle()}>Log In</button>
        <button onClick={() => logout()}>Log Out</button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
