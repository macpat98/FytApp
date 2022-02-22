import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR2GQ3Rv33wJbGiDx7nbkrdLbSmLbbzrI",
  authDomain: "fyt-app-5a173.firebaseapp.com",
  projectId: "fyt-app-5a173",
  storageBucket: "fyt-app-5a173.appspot.com",
  messagingSenderId: "433841607026",
  appId: "1:433841607026:web:1c196891cb1aeffa4f0deb",
  measurementId: "G-SV8T4W0ZHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
