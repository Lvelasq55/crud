import firebase from 'firebase/app'
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyCtcZ-vjOuBXW_CaupklpZfNh7A1CWLzAI",
    authDomain: "crud-b044b.firebaseapp.com",
    projectId: "crud-b044b",
    storageBucket: "crud-b044b.appspot.com",
    messagingSenderId: "481851759935",
    appId: "1:481851759935:web:e356ba2749c13e09e3478a"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)