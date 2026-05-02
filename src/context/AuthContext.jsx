"use client";

import { createContext, useEffect, useState } from "react";
import app from "@/firebase/firebase.config";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 🔑 Login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // 🔑 Register (name + photo save)
  const register = async (email, password, name, photo) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredential.user, {
      displayName: name,
      photoURL: photo,
    });

    return userCredential;
  };

  // 🔑 Google login
  const googleLogin = () => signInWithPopup(auth, provider);

  // 🔑 Logout
  const logout = () => signOut(auth);

  // 🔄 user observer
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, googleLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};