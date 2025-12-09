import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhJXF0r7YuwOvbvePE_Waj0FQXzga8Hfk",
  authDomain: "datadiamond-f478e.firebaseapp.com",
  projectId: "datadiamond-f478e",
  storageBucket: "datadiamond-f478e.firebasestorage.app",
  messagingSenderId: "280679611092",
  appId: "1:280679611092:web:faa724cd8158cfdac81941"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;