import firebase from 'firebase/app';
import 'firebase/firebase-auth';
// import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDLyhzMpeewJ-uh8crwzecAAiTp2aWqDqc",
  authDomain: "test-7866a.firebaseapp.com",
  databaseURL: "https://test-7866a.firebaseio.com",
  projectId: "test-7866a",
  storageBucket: "test-7866a.appspot.com",
  messagingSenderId: "581211010033",
  appId: "1:581211010033:web:148c9f6e628782b9470a50",
  measurementId: "G-P0PB29HDZR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;