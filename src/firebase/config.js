import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// config for the firebase
const firebaseConfig = {
  apiKey: "AIzaSyDjtc50pWJM_nWGacckXPaY4yaUmsZjJao",
  authDomain: "col-of-vue.firebaseapp.com",
  projectId: "col-of-vue",
  storageBucket: "col-of-vue.appspot.com",
  messagingSenderId: "486311479205",
  appId: "1:486311479205:web:5cc746a99209482e178a4c",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);
// get firestore
const db = getFirestore(app);
const timestamp = serverTimestamp();
// export the connection
export { db, timestamp };
