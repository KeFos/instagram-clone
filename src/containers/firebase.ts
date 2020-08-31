import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAM5pw_3OYNsmaCuTT_aZfv_3I6udwVy-M",
    authDomain: "instagram-clone-2c5ec.firebaseapp.com",
    databaseURL: "https://instagram-clone-2c5ec.firebaseio.com",
    projectId: "instagram-clone-2c5ec",
    storageBucket: "instagram-clone-2c5ec.appspot.com",
    messagingSenderId: "810324700301",
    appId: "1:810324700301:web:89d9334448cb17e70086c4",
    measurementId: "G-FG2DR8EW9N"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;