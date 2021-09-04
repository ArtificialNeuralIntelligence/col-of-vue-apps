import { initializeApp } from "firebse/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDjtc50pWJM_nWGacckXPaY4yaUmsZjJao",
  authDomain: "col-of-vue.firebaseapp.com",
  projectId: "col-of-vue",
  storageBucket: "col-of-vue.appspot.com",
  messagingSenderId: "486311479205",
  appId: "1:486311479205:web:582a37010a169a71178a4c",
};

// init the app
const app = initializeApp(firebaseConfig);

// get firestore
const db = getFirestore(app);

// get server timestamp
const timestamp = serverTimestamp();

// export those object
export { db, timestamp };
