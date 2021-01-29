var admin1 = {
    "firstName" : "Jonathan",
    "lastName" : "Tremblay",
    "age" : 22,
    "gender" : "Male",
    "country" : "Canada",
    "region" : "Montreal",
    "username" : "jones",
    "password" : "blackPink",
    "tellUsMore": "Nothing to say." 
}

var admin2 = {
    "firstName" : "Fatima",
    "lastName" : "Ghaddar",
    "age" : 25,
    "gender" : "Female",
    "country" : "Canada",
    "region" : "Montreal",
    "username" : "fatima",
    "password" : "regasu",
    "tellUsMore": "Vive Haïti." 
}

function settingsWithoutLogin(showHide){
    if (showHide == "show"){
        $("#myModal").modal("toggle");
    }
    if (showHide == "hide"){
        $("#myModal").modal("hide");
    }
}