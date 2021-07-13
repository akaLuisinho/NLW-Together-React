import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCKiI6NFtFdbl1rFC0redvxdrLySQ6aX68",
  authDomain: "letmeask-ef5a1.firebaseapp.com",
  projectId: "letmeask-ef5a1",
  storageBucket: "letmeask-ef5a1.appspot.com",
  messagingSenderId: "768431590938",
  appId: "1:768431590938:web:c43710373aecfa0f2a4ba3",
  measurementId: "G-HT9JK4WGDH"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCKiI6NFtFdbl1rFC0redvxdrLySQ6aX68",
//   authDomain: "letmeask-ef5a1.firebaseapp.com",
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSASING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };


firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database}