import { createContext, useState, useEffect } from "react";
import {
  createUserDocumemtFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumemtFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubcribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
