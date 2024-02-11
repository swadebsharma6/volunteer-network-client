
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_apiKey,
  authDomain: import.meta.env.VITE_REACT_authDomain,
  projectId: import.meta.env.VITE_REACT_projectId,
  storageBucket: import.meta.env.VITE_REACT_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_messagingSenderId,
  appId: import.meta.env.VITE_REACT_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth