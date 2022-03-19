import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumemtFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumemtFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumemtFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button>
    </div>
  );
};
export default SignIn;
