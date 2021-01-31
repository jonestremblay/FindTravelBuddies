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
      if(countFieldsOK == 10){
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
      $("#myModal").modal("toggle");
  }
  if (showHide == "hide"){
      $("#myModal").modal("hide");
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

function registerValidation(){
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


  firstNameValidation(firstName);
  lastNameValidation(lastName);
  ageValidation(age);
  genderValidation(gender);
  countryValidation(country);
  regionValidation(region);
  usernameValidation(user);
  passwordsValidation(pass);
  passwordsValidation(pass2);
  comparePasswords(pass, pass2);
  tellUsMoreValidation(tellUsMore);
}



function ageValidation(age){
  // As the Children's Online Protection Rule (COPPA) imposes.
  var msg;
  if (isNaN(age)){
      msg = "This is not a number !";
      $("#age").addClass("is-invalid");
      $("input_age").append($("#ageValidation").text(msg).addClass("invalid-feedback"));
  } else if (age < 13){
      msg = "Must be 13 years old";
      $("#age").addClass("is-invalid");
      $("input_age").append($("#ageValidation").text(msg).addClass("invalid-feedback"));
  } else {
    $("#age").removeClass("is-invalid");
    $("#age").addClass("is-valid");
    countFieldsOK += 1;
    

}
 
}

function passwordsValidation(password){
  // ^[a-z0-9 !@#$%?&*_-]{8,}$
  var msg;
  var res = password.match('^[a-z0-9 !@#$%?&*()+_-]{8,}$');
  if (res != password){
      msg = "Min. 8 characters";
      $("#password").addClass("is-invalid");
      $("input_pass").append($("#passValidation").text(msg).addClass("invalid-feedback"));
  } else {
    $("#password").removeClass("is-invalid");
    $("#password").addClass("is-valid");
    countFieldsOK += 1;

  }

}

function comparePasswords(password, confirmPassword){
  var msg; 
  if (password != password.match(confirmPassword)){
      msg = "Passwords doesn't match.";
      $("#password2").addClass("is-invalid");
      $("input_pass2").append($("#confirmPassValidation").text(msg).addClass("invalid-feedback"));
  } else {
    $("#password2").removeClass("is-invalid");
    $("#password2").addClass("is-valid");
    countFieldsOK += 1;
  }
}



function regionValidation(region){
  var msg;

  if(region == null || region == ""){
      msg = "Please enter something";
      $("#region").addClass("is-invalid");
      $("input_region").append($("#regionValidation").text(msg).addClass("invalid-feedback"));
  } else if ( region != region.match('^[a-zA-Z0-9 -]{3,}$')){
      msg = "Too short / Invalid characters";
      $("#region").addClass("is-invalid");
      $("input_region").append($("#regionValidation").text(msg).addClass("invalid-feedback"));
  } else {
    $("#region").removeClass("is-invalid");
    $("#region").addClass("is-valid");
    countFieldsOK += 1;

}


}

function countryValidation(country){
  var msg;
  if(country == null || country == ""){
      msg = "Pick one";
      $("#country").addClass("is-invalid");
      $("input_country").append($("#countryValidation").text(msg).addClass("invalid-feedback"));
  } else {
    $("#country").removeClass("is-invalid");
    $("#country").addClass("is-valid");
    countFieldsOK += 1;

}
}

function genderValidation(gender){
  var msg;
  if(gender == null || gender == ""){
      msg = "Pick one";
      $("#gender").addClass("is-invalid");
      $("input_gender").append($("#genderValidation").text(msg).addClass("invalid-feedback"));
  } else {
    $("#gender").removeClass("is-invalid");
    $("#gender").addClass("is-valid");
    countFieldsOK += 1;

}
}

function firstNameValidation(firstName){
  var msg;
  if (firstName == null || firstName == ""){
      msg = "Please enter your first name";
      $("#firstName").addClass("is-invalid");
      $("input_firstName").append($("#firstNameValidation").text(msg).addClass("invalid-feedback"));
  } else if (firstName != firstName.match('^[a-zA-Z-]{1,}$')){
      msg = "Invalid characters.";
      $("#firstName").addClass("is-invalid");
      $("input_firstName").append($("#firstNameValidation").text(msg).addClass("invalid-feedback"));
  } else {
      $("#firstName").removeClass("is-invalid");
      $("#firstName").addClass("is-valid");
      countFieldsOK += 1;

  }
}

function lastNameValidation(lastName){
  var msg;
  if (lastName == null ||lastName == ""){
      msg = "Please enter your last name";
      $("#lastName").addClass("is-invalid");
      $("input_lastName").append($("#lastNameValidation").text(msg).addClass("invalid-feedback"));
  } else if (lastName != lastName.match('^[a-zA-Z-]{1,}$')){
      msg = "Invalid characters.";
      $("#lastName").addClass("is-invalid");
      $("input_lastName").append($("#lastNameValidation").text(msg).addClass("invalid-feedback"));
  } else {
    $("#lastName").removeClass("is-invalid");
    $("#lastName").addClass("is-valid");
    countFieldsOK += 1;

}
 
}

function tellUsMoreValidation(tellUsMore){
  const CHAR_LIMIT = 120;
  var msg;
  if (tellUsMore == null || tellUsMore == ""){
      msg = "Enter a little something please :D";
      $("#tellUsMore").addClass("is-invalid");
      $("input_tellUs").append($("#tellUsValidation").text(msg).addClass("invalid-feedback"));
  } else if (tellUsMore.length > CHAR_LIMIT){
      msg = "Sorry, maximum 120 characters allowed.";
      $("#tellUsMore").addClass("is-invalid");
      $("input_tellUs").append($("#tellUsValidation").text(msg).addClass("invalid-feedback"));
  } else {
      $("#tellUsMore").removeClass("is-invalid");
      $("#tellUsMore").addClass("is-valid");
      countFieldsOK += 1;

    }
 
}

function usernameValidation(username){
  if (username == null || username == ""){
      msg = "You need a username";
      $("#username").addClass("is-invalid");
      $("input_user").append($("#userValidation").text(msg).addClass("invalid-feedback"));
  } else if (username != username.match('^[a-zA-Z0-9-_]{3,}$')){
      msg = "Too short / Invalid characters";
      $("#username").addClass("is-invalid");
      $("input_user").append($("#userValidation").text(msg).addClass("invalid-feedback"));
  } else if (!checkUsernameAvailability(username)){
      // if user already exists
      msg = "Sorry, username taken"
      $("#username").addClass("is-invalid");
      $("input_user").append($("#userValidation").text(msg).addClass("invalid-feedback"));
  } else {
    $("#username").removeClass("is-invalid");
    $("#username").addClass("is-valid");
    countFieldsOK += 1;

  }
}

function checkUsernameAvailability(username){
// Check the unicity of the username
// Also check it's length
// ^[a-z0-9_-]{5,20}$
    for (i =0; i < users.length; i++){
        if (users[i].username == username){
            return false;
        }
    }
    return true;
}













// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  