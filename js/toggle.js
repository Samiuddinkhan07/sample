function toggleCheck() {
    var toggle = document.getElementById("toggle");
    var divhide = document.getElementById("hintImageID");
         
  if(toggle.checked === true){
      
      divhide.style.display = "none";
      $('#toggleSearchFeildDiv').removeAttr('onclick','searchToggleGuide()')
        $('.calenderguide').removeAttr('onclick','calenderGuide()')
        $('.settingGuide').removeAttr('onclick','settingsGuide()')
        $('.helpguide').removeAttr('onclick','')
        $('.userMainProfile').removeAttr('onclick','userProfileGuide()')
  } else {
      divhide.style.display = "flex";
       $('#toggleSearchFeildDiv').attr('onclick','searchToggleGuide()')
        $('.calenderguide').attr('onclick','calenderGuide()')
        $('.settingGuide').attr('onclick','settingsGuide()')
        $('.helpguide').attr('onclick','helpGuide()')
        $('.userMainProfile').attr('onclick','userProfileGuide()')
  }
}