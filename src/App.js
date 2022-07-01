import { useEffect } from "react";
import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/landingPage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAnalytics,
  initializeAnalytics,
  logEvent,
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHbLcvftu4t3T42zlqTLsMdyJbJuEf-Vg",
  authDomain: "trober-532ad.firebaseapp.com",
  projectId: "trober-532ad",
  storageBucket: "trober-532ad.appspot.com",
  messagingSenderId: "59982775356",
  appId: "1:59982775356:web:7fa7a26b89c0bf78446f39",
  measurementId: "G-8FMKKWKPSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

function App() {
  useEffect(() => {
    const logTestAnalytics = async () => {
      await logEvent(analytics, "select_content", {
        content_type: "image",
        content_id: "P12453",
        items: [{ name: "Kittens" }],
      });

      await logEvent(analytics, "test", { test: "test" });
    };
    logTestAnalytics();
  }, []);
  return <LandingPage />;
}

export default App;
