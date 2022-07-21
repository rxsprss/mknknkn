//new
var firebaseConfig = { apiKey: "AIzaSyBGttYjgcUX-xn9HOQtxSSMsHheUEhKPvs", authDomain: "kwitter-1280b.firebaseapp.com", databaseURL:"https://kwitter-1280b-default-rtdb.firebaseio.com/", projectId: "kwitter-1280b", storageBucket: "kwitter-1280b.appspot.com", messagingSenderId: "730438701831", appId: "1:730438701831:web:f0155c769642cdcba0eba2" }; 
 //Initialize Firebase 
 firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,message: msg, like:0
    });
    document.getElementById("msg").value = "";

}
function getData(){
    firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
 /*   firebase.database().ref("/"+room_name).on('value',function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if(childKey != "purpose"){
                firebase_message_id = childKey;
                msg_data = childData;*/
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
                 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
                 like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
                 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                 row = name_with_tag + message_with_tag + like_button + span_with_tag;
                 document.getElementById("output").innerHTML += row; 

            }
        });
    });
}
getData();
function updateLike(message_id){
console.log("clickedonlikebutton-"+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
update_likes = Number(likes)+1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}
function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
};