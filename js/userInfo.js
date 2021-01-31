connected = false;

// var connection = localStorage.setItem("connected", "false");

var jonathan = {
    "firstName" : "Jonathan",
    "lastName" : "Tremblay",
    "age" : 22,
    "gender" : "Male",
    "country" : "Canada",
    "region" : "Montreal",
    "username" : "jones",
    "password" : "blackPink",
    "tellUsMore": "Nothing to say.",
    "photo" : "../media/img/avatar/exAvatar.jpg"
}

var fatima = {
    "firstName" : "Fatima",
    "lastName" : "Ghaddar",
    "age" : 25,
    "gender" : "Female",
    "country" : "Canada",
    "region" : "Montreal",
    "username" : "fatima",
    "password" : "regasu",
    "tellUsMore": "Vive Haïti.", 
    "photo" : "../media/img/avatar/dicaprio.jpg"

}
var dicaprio = {
    "firstName" : "Leonardo",
    "lastName" : "DiCaprio",
    "age" : 46,
    "gender" : "Male",
    "country" : "USA",
    "region" : "Los Angeles",
    "username" : "dicaprio",
    "password" : "nature",
    "tellUsMore": "I'm an actor.",
    "photo" : "../media/img/avatar/fatima.jpg"

}
var freeman = {
    "firstName" : "Morgan",
    "lastName" : "Freeman",
    "age" : 83,
    "gender" : "Male",
    "country" : "USA",
    "region" : "Memphis",
    "username" : "freeman",
    "password" : "morgan",
    "tellUsMore": "Gravitas.",
    "photo" : "../media/img/avatar/freeman.jpg"

}

var users = [jonathan, fatima, dicaprio, freeman];

$(function(){
    if(connected == true){
        $("#navConnection").html($("#navConnection").html().replace('( Login )','( Logout )'));

    } else {
        $("#navConnection").html($("#navConnection").html().replace('( Logout )', '( Login )'));

    }
    $("#navConnection").attr("href", "../PageLogin/login.html");
})

function toggleModal(showHide){
    if (showHide == "show"){
        $("#userCardModal").modal("toggle");
    }
    if (showHide == "hide"){
        $("#userCardModal").modal("hide");
    }
}

function getUserByUsername(username){
    for (i = 0; i < users.length; i++){
        if (users[i].username == username){
            return users[i];
        }
    }
    }

currentUser = getUserByUsername("fatima");





  // for regex tests : https://www.regextester.com/104030