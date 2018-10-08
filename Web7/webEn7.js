function myDropDownFunction(){

    document.getElementById("myUnitList").classList.toggle("show");

}

function toggleFunction(clickedButton){
  var allButtons = document.getElementById('myUnitList').querySelectorAll("button");
    for(var i = 0; i < allButtons.length; i++){
      allButtons[i].className = "hide";
    }

      clickedButton.className = "something";
      document.getElementById("tempDiv").className= "nothing";
        document.getElementById("toConvert").className= "";
}
