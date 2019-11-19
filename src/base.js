import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvLIrFyW-VMzdF0TZMT7g4vK7N9Q4Dau8",
    authDomain: "catch-of-the-day-martinkrsa.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-martinkrsa.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp }

// This is a default export
export default base;
