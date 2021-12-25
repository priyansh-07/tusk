import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { IAuthContext } from "../contexts/AuthContext";
import { Credentials } from '../types';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export const signIn = (credentials: Credentials, authContext: IAuthContext): void => {
  signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then( userCredentials => {
      authContext.setAuth({ userId: userCredentials.user.uid, isLoggedIn: true})
    })
    .catch( error => {
      console.error(error)
    })
}

export const signOut = (authContext: IAuthContext): void => {
  auth.signOut()
  authContext.setAuth({ userId: "", isLoggedIn: false})
}

export default firebaseApp;
