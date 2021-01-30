function newUserCardModal(showHide){
    if (showHide == "show"){
        // trying validation
        $("#username").addClass("is-invalid");
        $("#usernameFeedback").addClass("invalid-feedback");
        $("#usernameFeedback").html("Min. 6 char.");

        // card
        $("#userCardModalTitle").html("Bienvenue " + users[0].username);
        $("#cardPicture").attr("src", "../media/img/avatar/fatima.jpg")
        $("#cardFullName").html(users[0].firstName + " " + users[0].lastName);  
        $("#cardText").html(users[0].tellUsMore);  
        $("#cardAgeGender").html(users[0].age + " ans | " + users[0].gender);  
        $("#cardRegionCountry").html(users[0].region + "  | " + users[0].country);  
        $("#userCardModal").modal("toggle");
    }
    if (showHide == "hide"){
        $("#userCardModal").modal("hide");
    }
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
  