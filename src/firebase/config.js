import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDZ9u-fclveMUFlbKDEx7JWd3Tk1fZ9Thk",
  authDomain: "fir-a3006.firebaseapp.com",
  projectId: "fir-a3006",
  storageBucket: "gs://fir-a3006.appspot.com/",
  //storageBucket: "fir-a3006.appspot.com",
  messagingSenderId: "343069385029",
  appId: "1:343069385029:web:1d0f6c6ea288937caa9e2c",
  measurementId: "G-6W957JQD18"
};


const app = initializeApp(firebaseConfig);



export default getFirestore(app);

export const storage = getStorage(app);


// ##########  net worck error handler



// Write a string when this client loses connection
