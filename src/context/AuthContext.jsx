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
  const [dark, setDark] = useState(true);

  // LOGIN
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // REGISTER
  const register = async (email, password, name, photo) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
      displayName: name,
      photoURL: photo,
    });

    return userCredential;
  };

  // GOOGLE LOGIN
  const googleLogin = () => signInWithPopup(auth, provider);

  // LOGOUT
  const logout = () => signOut(auth);

  // UPDATE PROFILE
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // THEME
  const toggleTheme = () => setDark(!dark);

  // USER OBSERVER
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        googleLogin,
        logout,
        updateUserProfile,
        dark,
        toggleTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};