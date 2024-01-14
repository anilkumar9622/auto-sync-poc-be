const firebase = require('firebase-admin')
const firebaseConfig = {
    apiKey: "AIzaSyDZpHjL6sUuNvfSn87CVQTkMCZkBqy8SNc",
    authDomain: "pladis-db.firebaseapp.com",
    projectId: "pladis-db",
    storageBucket: "pladis-db.appspot.com",
    messagingSenderId: "341297125541",
    appId: "1:341297125541:web:bbc3f70194b87fb2e5d54c",
    measurementId: "G-1LBR06NN5W"
  };
  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const User = db.collection("Users")
  module.exports = User;