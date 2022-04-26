var firebaseConfig = {
    apiKey: "AIzaSyCdR-3TYI_4F4x23y5NjztvJLQQ18sUhOs",
    authDomain: "kwitter-ad727.firebaseapp.com",
    databaseURL: "https://kwitter-ad727-default-rtdb.firebaseio.com",
    projectId: "kwitter-ad727",
    storageBucket: "kwitter-ad727.appspot.com",
    messagingSenderId: "694706978414",
    appId: "1:694706978414:web:6211dd5e6a5b2804fcb07f",
    measurementId: "G-SHV6SJHBMW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;