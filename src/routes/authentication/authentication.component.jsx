import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumemtFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./authentication.styles.scss";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumemtFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
