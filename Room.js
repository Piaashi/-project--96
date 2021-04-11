
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC4TFW7bhb4adGE1poVRRVGcORo_364uLo",
    authDomain: "world-wide-whispers.firebaseapp.com",
    projectId: "world-wide-whispers",
    storageBucket: "world-wide-whispers.appspot.com",
    messagingSenderId: "388956224401",
    appId: "1:388956224401:web:93a4f1cd8b9358d27d7830"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML="Welcome "+ user_name + " ! ;-)";
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
  
        localStorage.setItem("room_name" , room_name);
  
        window.location = "Chat.html" ;
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" +Room_names +" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

 //End code
 });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "Chat.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
}
