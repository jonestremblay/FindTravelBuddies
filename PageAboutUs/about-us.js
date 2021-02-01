function settingsWithoutLogin(showHide){
    if (showHide == "show"){
        $("#settingsModal").modal("toggle");
    }
    if (showHide == "hide"){
        $("#settingsModal").modal("hide");
    }
  }