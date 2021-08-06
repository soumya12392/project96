// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWjEtW7HPA2tTkjf3NHuG-SqR-w86JqHs",
  authDomain: "project-96-7415c.firebaseapp.com",
  databaseURL: "https://project-96-7415c-default-rtdb.firebaseio.com",
  projectId: "project-96-7415c",
  storageBucket: "project-96-7415c.appspot.com",
  messagingSenderId: "949991318324",
  appId: "1:949991318324:web:33b2ac59c69033a4f4fb61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom() {
  var room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room name"
  });

  localStorage.setItem("Room name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {var childKey  = childSnapshot.key;
  var Room_names = childKey;
  //Start code
    console.log("Room Name - " + Room_names);
    var row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
  //End code
  });});}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("Room name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("Username");
  window.location = "index.html";
}