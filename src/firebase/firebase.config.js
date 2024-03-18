// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRHfAEW8n-l4GjXt3SvjIRgQdlK_y6UUk",
  authDomain: "authentication-in-react-1a4ea.firebaseapp.com",
  projectId: "authentication-in-react-1a4ea",
  storageBucket: "authentication-in-react-1a4ea.appspot.com",
  messagingSenderId: "351742156621",
  appId: "1:351742156621:web:44188c0ff9fb337511a104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
