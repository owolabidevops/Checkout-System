import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYvfLv-jvNeclfIOpQ2HlkRw-qkQaBv7A",
  authDomain: "checkout-45afb.firebaseapp.com",
  databaseURL: "https://checkout-45afb.firebaseio.com",
  projectId: "checkout-45afb",
  storageBucket: "checkout-45afb.appspot.com",
  messagingSenderId: "374457334453",
  appId: "1:374457334453:web:8589e49a3efa52746f5cfc",
  measurementId: "G-SRF68EZJDP"
};
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  
  export { db}