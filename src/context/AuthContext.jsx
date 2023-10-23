import { useContext, useEffect, useState, createContext } from "react";
import { auth, db} from '../firebase';
import {setDoc, doc} from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //sign Up
  const signUp = (email, password) => {
     createUserWithEmailAndPassword(auth, email, password);
     setDoc(doc(db, 'users', email),{moviesList:[]})
  
  };

  //   Sign In
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return ()=> {
      unsubscribe();
    } 
  });

  return (
    <div>
      <AuthContext.Provider value={{ signUp,logIn,logOut, user }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const userAuth = () => {
    return useContext(AuthContext)
}
