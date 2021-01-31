
var loadFile = function(event) {
    var newImage = URL.createObjectURL(event.target.files[0]);
    var image = document.getElementById('avatarPicture2');
    image.src = newImage;
    
};

$(function(){
    var avatarPath = currentUser.photo;
    var userFullName = currentUser.firstName + " " + currentUser.lastName;
    var tellUsPart = currentUser.tellUsMore;
    var ageGender = currentUser.age + " | " + currentUser.gender;
    var region = currentUser.region;
    var country = currentUser.country;
    $("#profilePicture").attr("src", avatarPath);
    $("#userFullName").html(userFullName);
    $("#tellUsPart").html(tellUsPart);
    $("#ageGender").html(ageGender);
    $("#region").html(region);
    $("#country").html(country);
});

function changePassword(){
    var validFields = 0;
    var validPass = false;
    var currentPass = $("#currentPassword").val();
    var newPass = $("#newPassword").val();
    var newPassConfirm = $("#newPasswordConfirmation").val();

    if (currentPass != currentUser.password){
        var msg = "This is not your current password";
        $("#currentPassword").addClass("is-invalid");
        $("input_pass0").append($("#currentPasswordValidation").text(msg).addClass("invalid-feedback"));
    } else { // si le currentPass est ok
        $("#currentPassword").removeClass("is-invalid");
        $("#currentPassword").addClass("is-valid");
        validFields += 1;
    }

    var res = password.match('^[a-z0-9 !@#$%?&*()+_-]{8,}$');
    if (res != password){
        var msg = "Min. 8 characters";
        $("#newPassword").addClass("is-invalid");
        $("input_pass1").append($("#newPasswordValidation").text(msg).addClass("invalid-feedback"));
    } else {
      $("#newPassword").removeClass("is-invalid");
      $("#newPassword").addClass("is-valid");
      validFields += 1;
    }

    if (newPass != newPass.match(newPassConfirm)){
        var msg = "Passwords doesn't match.";
        $("#newPasswordConfirm").addClass("is-invalid");
        $("input_pass2").append($("#newPasswordConfirmValidation").text(msg).addClass("invalid-feedback"));
    } else {
      $("#newPasswordConfirm").removeClass("is-invalid");
      $("#newPasswordConfirm").addClass("is-valid");
      validFields += 1;
    }
    console.log(validFields);
    if(validFields == 3){
        currentUser.password = newPass;
        getUserByUsername(currentUser.username).password = newPass;
        console.log("pass changed to :" + newPass);
    } 
}

function passwordsValidation(password){
    // ^[a-z0-9 !@#$%?&*_-]{8,}$
    var msg;
   
  
  }

