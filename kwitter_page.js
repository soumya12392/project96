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

var roomName = localStorage.getItem("Room name");
var username = localStorage.getItem("Username");

function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Room name");
    window.location = "index.html";
}

function send() {
    var msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name: username,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}