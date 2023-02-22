import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signOut, signInWithRedirect } from "firebase/auth";

const FIREBASE_INIT_PARAMS = {
  apiKey: "AIzaSyBEmlv3Gwf2LiVl0nzk_J7u7vSzcHMFhrE",
  authDomain: "cs602-a0b65.firebaseapp.com",
  projectId: "cs602-a0b65",
  storageBucket: "cs602-a0b65.appspot.com",
  messagingSenderId: "7860806864",
  appId: "1:7860806864:web:d0a9f874f8509fd33faad5",
  measurementId: "G-KCMD51ZZHE",
};
const app = initializeApp(FIREBASE_INIT_PARAMS);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, logout, firebase };
