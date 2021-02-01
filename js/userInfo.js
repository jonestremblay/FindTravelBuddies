

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
    "photo" : "../media/img/avatar/jo.png"
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
    "tellUsMore": "J'me suis trouvé un billet !!", 
    "photo" : "../media/img/avatar/fatima.jpg"

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
    "photo" : "../media/img/avatar/dicaprio.jpg"

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


/* $(function(){ // Can't make with work without server
    if(connected){
        $("#navConnection").html().replace('( Login )','( Logout )');
        $("#navConnection").html().replace('( Logout )','( Logout )');
    } else {
        $("#navConnection").html().replace('( Logout )', '( Login )');
        $("#navConnection").html().replace('( Login )', '( Login )');
    }
    $("#navConnection").attr("href", "../PageLogin/login.html");
})
 */

function toggleModal(showHide){
    if (showHide == "show"){
        $("#userCardModal").modal("toggle");
    }
    if (showHide == "hide"){
        $("#userCardModal").modal("hide");
    }
}

function hideAllModalsOnLoad(){
    $("#settingsModal").modal.hide();
    $("#galleryModal").modal.hide();
}

function getUserByUsername(username){
    for (i = 0; i < users.length; i++){
        if (users[i].username == username){
            return users[i];
        }
    }
    }



function seConnecter(){
    let user = $("#inputUser").val();
    let pass = $("#inputPass").val();
    if (user == "" || pass == ""){
        alert("Please enter a username and a password.")
    } 
    else if (user == getUserByUsername(user).username){
        if (pass == getUserByUsername(user).password){
           
            window.location.replace("../PageAcceuil/acceuil.html");

        } 

    } else {
        alert("Bad credentials.");
    }
    
}
function getConnectedState(){
    return connected;
}
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

  function profileEditValidation(){
    var firstName = $("#firstName").val();
    console.log("firstname : " + firstName);

    var lastName = $("#lastName").val();
    console.log("lastname : " + lastName);

    var age = $("#age").val();
    console.log("age : " + age); 

    var gender = $("#genderEdit :selected").val();
    console.log("gender : " + gender);

    var country = $("#countryEdit :selected").val();
    console.log("country : " + country);

    var region = $("#regionEdit").val(); 
    console.log("region : " + region);

    var tellUsMore = $("#tellUsMore").val();
    console.log("tellusmore: " + tellUsMore);

    var currentPass =$("#currentPasswordProfile").val();
    console.log("currentPass : " + currentPass);
    console.log("fin");
  
    firstNameValidation(firstName);
    lastNameValidation(lastName);
    regionValidation(region);
    countryValidation(country);
    ageValidation(age);
    genderValidation(gender);
    tellUsMoreValidation(tellUsMore);
    checkCurrentPassword(currentPass);
  }

  function checkCurrentPassword(currentPass){
      var msg;
      if (currentPass == null || currentPass == ""){
        msg = "Please enter your current password";
        $("#currentPasswordProfile").addClass("is-invalid");
        $("input_currentPasswordProfile").append($("#currentPasswordProfileValidation").text(msg).addClass("invalid-feedback"));
    } else if (currentPass != currentUser.password){
        msg = "Wrong password. Guess again.";
        $("#currentPasswordProfile").addClass("is-invalid");
        $("input_currentPasswordProfile").append($("#currentPasswordProfileValidation").text(msg).addClass("invalid-feedback"));
    } else {
      $("#currentPasswordProfile").removeClass("is-invalid");
      $("#currentPasswordProfile").addClass("is-valid");
      countFieldsOK += 1;
  }
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
    var msg;
    var res = password.match('^[a-zA-Z0-9 !@#$%?&*()+_-]{1,}$');
      if(password == "") {
        msg = "Please enter a password";
        $("#password").addClass("is-invalid");
        $("input_pass").append($("#passValidation").text(msg).addClass("invalid-feedback"));
    } else if (res != password){
        msg = "Illegal characters";
        $("#password").addClass("is-invalid");
        $("input_pass").append($("#passValidation").text(msg).addClass("invalid-feedback"));
    } else if (password.length < 8){
        msg = "Minimum 8 characters";
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
    } else if(confirmPassword == ""){
        msg = "Please enter a password";
        $("#password2").addClass("is-invalid");
        $("input_pass2").append($("#confirmPassValidation").text(msg).addClass("invalid-feedback"));
    } else {
      $("#password2").removeClass("is-invalid");
      $("#input_pass2").addClass("is-valid");
      countFieldsOK += 1;
    }
  }
  
  
  
  function regionValidation(region){
    var msg;
  
    if(region == null || region == ""){
        msg = "Please enter something";
        $("#region").addClass("is-invalid");
        $("input_region").append($("#regionValidation").text(msg).addClass("invalid-feedback"));
        $("#regionEdit").addClass("is-invalid"); // For user setting page
        $("input_region").append($("#regionValidation").text(msg).addClass("invalid-feedback"));
    } else if ( region != region.match('^[a-zA-Z0-9 -]{3,}$')){
        msg = "Too short / Invalid characters";
        $("#region").addClass("is-invalid");
        $("input_region").append($("#regionValidation").text(msg).addClass("invalid-feedback"));
        $("#regionEdit").addClass("is-invalid");
        $("input_region").append($("#regionValidation").text(msg).addClass("invalid-feedback"));
    } else {
      $("#region").removeClass("is-invalid");
      $("#region").addClass("is-valid");
      $("#regionEdit").removeClass("is-invalid");
      $("#regionEdit").addClass("is-valid");
      countFieldsOK += 1;
  
  }
  
  
  }
  
  function countryValidation(country){
    var msg;
    if(country == null || country == ""){
        msg = "Pick one";
        $("#country").addClass("is-invalid"); // Register page
        $("input_country").append($("#countryValidation").text(msg).addClass("invalid-feedback"));
        $("#countryEdit").addClass("is-invalid");  // For user setting page
        $("input_country").append($("#countryValidation").text(msg).addClass("invalid-feedback"));
    } else {
      $("#country").removeClass("is-invalid");
      $("#country").addClass("is-valid");
      $("#countryEdit").removeClass("is-invalid");
      $("#countryEdit").addClass("is-valid");
      countFieldsOK += 1;
  
  }
  }
  
  function genderValidation(gender){
    var msg;
    if(gender == null || gender == ""){
        msg = "Pick one";
        $("#gender").addClass("is-invalid");
        $("input_gender").append($("#genderValidation").text(msg).addClass("invalid-feedback"));
        $("#genderEdit").addClass("is-invalid");
        $("input_gender").append($("#genderValidation").text(msg).addClass("invalid-feedback"));
    } else {
      $("#gender").removeClass("is-invalid");
      $("#gender").addClass("is-valid");
      $("#genderEdit").removeClass("is-invalid");
      $("#genderEdit").addClass("is-valid");
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
        $("input_tellUsMore").append($("#tellUsValidation").text(msg).addClass("invalid-feedback"));
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
  

  // for regex tests : https://www.regextester.com/104030

  
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