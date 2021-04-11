// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4TFW7bhb4adGE1poVRRVGcORo_364uLo",
    authDomain: "world-wide-whispers.firebaseapp.com",
    databaseURL: "https://world-wide-whispers-default-rtdb.firebaseio.com",
    projectId: "world-wide-whispers",
    storageBucket: "world-wide-whispers.appspot.com",
    messagingSenderId: "388956224401",
    appId: "1:388956224401:web:93a4f1cd8b9358d27d7830"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
      
}




