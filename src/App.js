import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import "./App.css";
import config from "./config";
import { auth } from "./firebase";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function onAuthStateChange(callback, navigate) {
  return auth.onAuthStateChanged(async (user) => {
    if (user) {
      const { uid, displayName, email, photoURL } = user;
      try {
        const { data: response } = await axios.get(config.apiBasePath + "/user/" + uid);
        if (Object.keys(response).length === 0) {
          // Create User if user not exists.
          const requestData = {
            userID: uid,
            name: displayName,
            email,
            photoUrl: photoURL,
            status: 1,
            isAdmin: 0,
          };
          await axios.post(config.apiBasePath + "/user", requestData);
        }
        callback({ uid, userName: displayName, photoUrl: photoURL, email, loggedIn: true });
        navigate("/");
      } catch (error) {
        callback({ uid: "", userName: "", loggedIn: false });
        navigate("/login");
      }
    } else {
      callback({ uid: "", userName: "", loggedIn: false });
      navigate("/login");
    }
  });
}

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ uid: "", userName: "", photoUrl: "", loggedIn: false });
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser, navigate);
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard {...user} />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
