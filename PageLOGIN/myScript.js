$(function(){
    $("#btnLogin").on("click", function(){
        
        seConnecter();
    });
});


function seConnecter(){
    let user = $("#inputUser").val();
    let pass = $("#inputPass").val();
    if (user == "" || pass == ""){
        alert("Please enter a username and a password.")
    } else if (user == getUserByUsername(user).username){
        if (pass == getUserByUsername(user).password){
            connected = true;
            window.location.replace("../PageAcceuil/index.html");

        }
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