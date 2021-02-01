countFieldsOK = 0;

function newUserCardModal(showHide){
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var age = $("#age").val();
  var gender = $("#gender").val();
  var country = $("#country").val();
  var region = $("#region").val();
  var user = $("#username").val();
  var pass =$("#password").val();
  var pass2 = $("#password2").val();
  var tellUsMore = $("#tellUsMore").val();
  // validation calls  
  registerValidation(); // if a field is valid, validFieldsCount get +1
  console.log(countFieldsOK);
    if (showHide == "show"){
      if(countFieldsOK > 10){
        $("#userCardModalTitle").html("Bienvenue " + user);
        $("#cardFullName").html(firstName + " " + lastName);  
        $("#cardText").html(tellUsMore);  
        $("#cardAgeGender").html(age + " ans | " + gender);  
        $("#cardRegionCountry").html(region + "  | " + country);  
        $("#userCardModal").modal("toggle");
      }
      countFieldsOK = 0;     
    }
    if (showHide == "hide"){
        $("#userCardModal").modal("hide");
    }
}

function settingsWithoutLogin(showHide){
  if (showHide == "show"){
      $("#settingsModal").modal("toggle");
  }
  if (showHide == "hide"){
      $("#settingsModal").modal("hide");
  }
}


/* function checkValidFieldsCount(){
  var validFieldsCount = 0;
  var fieldsID =["#firstName", "#lastName",
                 "#age", "#gender", "#country",
                 "region", "username",
                 "password", "password2",
                 "tellUsMore"];
  
  for (i=0; i < fieldsID.length; i++){
    if($(fieldsID[i]).hasClass("is-valid")){
      validFieldsCount += 1;
    }
  }
  if (validFieldsCount == 10){
    return true;
  } else {
    return false;
  }
} */














  