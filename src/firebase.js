// Cara Pertama
// import firebase from "firebase/compat/app"
// import "firebase/compat/storage"

// Cara Kedua
import firebase from "@firebase/app-compat"
import "@firebase/storage-compat"

const firebaseConfig = {
  apiKey: "AIzaSyCAvKpxEBCJBeoRizvrGE9iL-C9iSSlA38",
  authDomain: "vuecarstore.firebaseapp.com",
  projectId: "vuecarstore",
  storageBucket: "vuecarstore.appspot.com",
  messagingSenderId: "380720731363",
  appId: "1:380720731363:web:c461b044defc13cea361d6",
  measurementId: "G-9KRRBF8PNF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;