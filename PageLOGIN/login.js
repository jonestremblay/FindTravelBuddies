$(function(){
    $("#btnLogin").on("click", function(){
        seConnecter();
        connect($("#inputUser").val());
       
    });
});

function settingsWithoutLogin(showHide){
  if (showHide == "show"){
      $("#settingsModal").modal("toggle");
  }
  if (showHide == "hide"){
      $("#settingsModal").modal("hide");
  }
}

function galleryWithoutLogin(showHide){
  if (showHide == "show"){
      $("#galleryModal").modal("toggle");
  }
  if (showHide == "hide"){
      $("#galleryModal").modal("hide");
  }
}


function showPasswordField(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.className = 'fa fa-eye-slash fa-2x showpwd';
    } else {
      x.type = "password";
      el.className = 'fa fa-eye fa-2x showpwd';
    }
  } 