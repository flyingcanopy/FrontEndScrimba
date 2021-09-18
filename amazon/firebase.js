import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBPn8ZwxnWXiPrwJPsy1Jyw7Qg-GXH9XDg",
    authDomain: "fir-e1a29.firebaseapp.com",
    projectId: "fir-e1a29",
    storageBucket: "fir-e1a29.appspot.com",
    messagingSenderId: "1027119335601",
    appId: "1:1027119335601:web:bc27c3247b7d1d16e97a90",
    measurementId: "G-M1NMH3E2H2"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore()
  export default db