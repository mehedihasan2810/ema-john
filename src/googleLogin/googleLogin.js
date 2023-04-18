import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const gooleProvider = new GoogleAuthProvider();

const googleLogin = () => {
  return signInWithPopup(auth, gooleProvider);
};

export default googleLogin;
