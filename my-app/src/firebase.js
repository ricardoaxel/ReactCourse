import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyACrI0hQA7ke0UPKD05VLL2ajNiQOFAlak",
    authDomain: "crud-udemy-react-12f99.firebaseapp.com",
    databaseURL: "https://crud-udemy-react-12f99.firebaseio.com",
    projectId: "crud-udemy-react-12f99",
    storageBucket: "crud-udemy-react-12f99.appspot.com",
    messagingSenderId: "217675656871",
    appId: "1:217675656871:web:302b711b500d15764d7582"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}