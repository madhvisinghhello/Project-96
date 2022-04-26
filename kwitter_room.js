
//ADD YOUR FIREBASE LINKS HERE
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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name ;

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                puspose:"adding roomName"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}