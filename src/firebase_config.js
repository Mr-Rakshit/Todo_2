import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDDyi6ookr5luyQCiZpA5jY_lg7pFu8S9c",
    authDomain: "todoapp-256ca.firebaseapp.com",
    projectId: "todoapp-256ca",
    storageBucket: "todoapp-256ca.appspot.com",
    messagingSenderId: "302371951231",
    appId: "1:302371951231:web:f49815e66795571df5654a"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()

  export { db } 