import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { app } from "../Firebase/Firebase.config";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// create an instance of Google AuthProvider================================
const googleProvider = new GoogleAuthProvider();

// =================================================================

const AuthProvider = ({ children }) => {
  // ==========================handle state=======================================
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //  =================================================================

  // ========================create user=========================================
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  =================================================================
  //   ==================Sign in User================================================
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   =================Google sign =================================================
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   =================Sign out user===============================================================
  const logout = () => {
    setLoading(true);
    signOut(auth);
  };
  // =============================================================================================
  //   =================Checking the user is Sign in Or not===============================================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userParameter) => {
      setUser(userParameter);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // ==============sending value to the context =============================
  const authInfo = {
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
