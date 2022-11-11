// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQbIuCEuMCeSU1qETdmOAQaFpmZGIMFf0",
  authDomain: "hackathon-b4a16.firebaseapp.com",
  databaseURL: "https://hackathon-b4a16-default-rtdb.firebaseio.com",
  projectId: "hackathon-b4a16",
  storageBucket: "hackathon-b4a16.appspot.com",
  messagingSenderId: "589683208959",
  appId: "1:589683208959:web:ec82312dba8cd27eb792ca",
  measurementId: "G-8410JZDH95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;