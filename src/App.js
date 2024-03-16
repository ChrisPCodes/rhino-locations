import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { getFirestore} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 



//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7R2lHGgoT8wclJoxXyj8HhIWm7PIgMNI",
  authDomain: "rhino-locations.firebaseapp.com",
  databaseURL: "https://rhino-locations-default-rtdb.firebaseio.com",
  projectId: "rhino-locations",
  storageBucket: "rhino-locations.appspot.com",
  messagingSenderId: "349014753812",
  appId: "1:349014753812:web:4610b6534c20c7757e1d01",
  measurementId: "G-0JY8TZXQVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app); 
export const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RIHNO LOCATIONS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
