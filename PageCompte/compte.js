 countFieldsOK = 0;

 $(function(){
    $("#firstName").attr("value", currentUser.firstName);
    $("#lastName").attr("value", currentUser.lastName);
    $("#regionEdit").attr("value", currentUser.region);
    $("#countryEdit").attr("value", currentUser.country);
    $("#age").attr("value", currentUser.age);
    $("#genderEdit").attr("value", currentUser.gender);
    $("#tellUsMore").val(currentUser.tellUsMore);

 });

$(function(){
    $("#passwordAlertSucess").hide();
    $("#profileAlertSucess").hide();
    $("#pictureAlertSucess").hide();
    $("#socialAlertSucess").hide();
    console.log(currentUser);

  });

  function popUpAlert(alertID){
    $(alertID).show();
    setTimeout(function(){
        $(alertID).alert('close');
    }, 4000);
  }

var loadFile = function(event) {
    var newImage = URL.createObjectURL(event.target.files[0]);
    var image = document.getElementById('avatarPicture2');
    image.src = newImage;
    
};

$(function(){
    chargeProfileCardOnLoad();
});

function chargeProfileCardAfterEdit(){
    var avatarPath = $("profilePicture").src;
    var userFullName = $("#firstName").val() + " " + $("#lastName").val();
    var tellUsPart = $("#tellUsMore").val();
    var ageGender = $("#age").val();
    var regionText = $("#regionEdit").val();
    var countryText = $("#countryEdit").val();
    $("#profilePicture").attr("src", avatarPath);
    $("#userFullName").html(userFullName);
    $("#tellUsPart").html(tellUsPart);
    $("#ageGender").html(ageGender);
    $("#region").html(regionText);
    $("#country").html(countryText);
}

function chargeProfileCardOnLoad(){
    var avatarPath = currentUser.photo;
    var userFullName = currentUser.firstName + " " + currentUser.lastName;
    var tellUsPart = currentUser.tellUsMore;
    var ageGender = currentUser.age + " | " + currentUser.gender;
    var regionText = currentUser.region;
    var countryText = currentUser.country;
    $("#profilePicture").attr("src", avatarPath);
    $("#userFullName").html(userFullName);
    $("#tellUsPart").html(tellUsPart);
    $("#ageGender").html(ageGender);
    $("#region").html(regionText);
    $("#country").html(countryText);
}

function changePassword(){
    var validFields = 0; // To allow changing password
    var currentPass = $("#currentPassword").val();
    var newPass = $("#newPassword").val();
    var newPassConfirm = $("#newPasswordConfirm").val();

    if (currentPass != currentUser.password){
        var msg = "This is not your current password";
        $("#currentPassword").addClass("is-invalid");
        $("input_pass0").append($("#currentPasswordValidation").text(msg).addClass("invalid-feedback"));
    } else { // si le currentPass est ok
        $("#currentPassword").removeClass("is-invalid");
        $("#currentPassword").addClass("is-valid");
        validFields += 1;
    }
    
    // Look for illegal characters, and min length of 8
    var res = newPass.match('^[a-zA-Z0-9 !@#$?&*()+_-]{1,}$');
    console.log('^[a-zA-Z0-9 !@#$?&*()+_-]{1,}$'); 
    if (res != newPass){
        var msg = "Illegal characters";
        $("#newPassword").addClass("is-invalid");
        $("input_pass1").append($("#newPasswordValidation").text(msg).addClass("invalid-feedback"));
    } else if (newPass.length < 8){
        var msg = "Minimum. 8 characters";
        $("#newPassword").addClass("is-invalid");
        $("input_pass1").append($("#newPasswordValidation").text(msg).addClass("invalid-feedback"));
    } else {
        $("#newPassword").removeClass("is-invalid");
        $("#newPassword").addClass("is-valid");
        validFields += 1;
    }

    if (newPass != newPassConfirm){
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
        popUpAlert("#passwordAlertSucess");

    } 
}


  function changeProfilePicture(){
      var imgSRC = $("#avatarPicture2").attr("src");
      $("#profilePicture").attr("src", imgSRC);
      popUpAlert("#profileAlertSucess");
  }

  function editSocialMediaLinkprofileLink(){
    var fbRef = $("#facebookLink").attr("href");
    var instaRef = $("#instagramLink").attr("href");
    var twitterRef = $("#twitterLink").attr("href");
    var snapRef = $("#snapchatLink").attr("href");
    var tiktokRef = $("#tiktokLink").attr("href");
    var facebook = $("#facebookField").val();
    if (facebook == null || facebook == ""){facebook = fbRef;}; // This way, if nothing entered, it keeps it's original value

    var instagram = $("#instagramField").val();
    if (instagram == null || instagram == ""){instagram = instaRef;}; // This way, if nothing entered, it keeps it's original value

    var twitter = $("#twitterField").val();
    if (twitter == null || twitter == ""){twitter = twitterRef;}; // This way, if nothing entered, it keeps it's original value

    var snapchat = $("#snapchatField").val();
    if (snapchat == null || snapchat == ""){snapchat = snapRef;}; // This way, if nothing entered, it keeps it's original value

    var tiktok = $("#tiktokField").val();
    if (tiktok == null || tiktok == ""){tiktok = tiktokRef;}; // This way, if nothing entered, it keeps it's original value

    $("#facebookLink").attr("href", facebook);
    $("#instagramLink").attr("href", instagram);
    $("#twitterLink").attr("href", twitter);
    $("#snapchatLink").attr("href", snapchat);
    $("#tiktokLink").attr("href", tiktok);

   popUpAlert("#socialAlertSucess");
    $("#facebookLink").attr("value", "");
    $("#instagramLink").attr("value", "");
    $("#twitterLink").attr("value", "");
    $("#snapchatLink").attr("value", "");
    $("#tiktokLink").attr("value", "");
  }

  function editProfile(){
     console.log(countFieldsOK);
    profileEditValidation();
    console.log(countFieldsOK);

      if (countFieldsOK == 8){
          chargeProfileCardAfterEdit();
          popUpAlert("#profileAlertSucess");
      } else {
          countFieldsOK = 0;
      }
  }

  /* function editProfile(){
    var currPass = $("#currentPassword").val();
    profileEditValidation();
        console.log(countFieldsOK);

      if (currPass == currentUser.password){
        $("#currentPassword").removeClass("is-invalid");
        $("#currentPassword").addClass("is-valid");
        popUpAlert("#profileAlertSucess");
      } else {
        msg = "Please enter your current password";
        $("#currentPassword").addClass("is-invalid");
        $("input_currentPassword").append($("#currentPasswordValidation").text(msg).addClass("invalid-feedback"));
      }
    } */