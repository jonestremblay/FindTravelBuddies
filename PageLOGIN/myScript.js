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
    "photo" : "../media/avatar/exAvatar.jpg"
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
    "photo" : "../media/avatar/dicaprio.jpg"

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
    "photo" : "../media/avatar/fatima.jpg"

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
    "photo" : "../media/avatar/freeman.jpg"

}

var users = [jonathan, fatima, dicaprio, freeman];




function getUserByUsername(username){
    for (i = 0; i < users.length; i++){
        if (users[i].username == username){
            return users[i];
        }
    }
}


$(function(){
    $("#btnLogin").on("click", function(){
        let user = $("#inputUser").val();
        let pass = $("#inputPass").val();
        if (user == getUserByUsername(user).username){
            if (pass == getUserByUsername(user).password){
                window.location.replace("../PageAcceuil/index.html");
            }
        }
    });
});

function settingsWithoutLogin(showHide){
    if (showHide == "show"){
        $("#myModal").modal("toggle");
    }
    if (showHide == "hide"){
        $("#myModal").modal("hide");
    }
}

function showHidePasswordField(){
    if ($("#inputPass").attr("type") == "password") {
        $("#inputPass").attr("type", "text");
    } else {
        $("#inputPass").attr("type", "password");
    }
}