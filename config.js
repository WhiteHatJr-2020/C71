import * as firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyCgNVo5rapVW_skNskkfCoh6Qx_kWHMxq0",
    authDomain: "wily-app-2efcc.firebaseapp.com",
    databaseURL: "https://wily-app-2efcc.firebaseio.com",
    projectId: "wily-app-2efcc",
    storageBucket: "wily-app-2efcc.appspot.com",
    messagingSenderId: "270896510939",
    appId: "1:270896510939:web:959c273c6620c88a6a99fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();