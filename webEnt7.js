function myDropDownFunction(){
  var alleButtonsInMyUnitListDiv = document.getElementById('myUnitList').querySelectorAll("button");
      var buttonToshow = false;
      for (var i = 0; i < alleButtonsInMyUnitListDiv.length; i++){
      if(alleButtonsInMyUnitListDiv[i].className == "hide"){
            document.getElementById("myUnitList").classList.toggle("show");
        }
    }

      if(buttonToshow == true){
        for (var j = 0; j < alleButtonsInMyUnitListDiv.length; j++){
          alleButtonsInMyUnitListDiv[j].className = " ";
           document.getElementById("myUnitList").classList.toggle("show");
      }




    }

}

function toggleFunction(clickedButton){
  var allButtons = document.getElementById('myUnitList').querySelectorAll("button");
    for(var i = 0; i < allButtons.length; i++){
      allButtons[i].className = "hide";
    }

      clickedButton.className = "";
      document.getElementById("tempRechnung").className= "";
}

function convertTemp(fahrenheitFelder, celsiusFelder) {
  if(fahrenheitFelder!=""){
    toCelsius(fahrenheitFelder);
  }
  else if(celsiusFelder!=""){
    toFahrenheit(celsiusFelder);
  }

}
  function toCelsius(fahrenheitFelder){
    var ergebnis = (5/9) * (fahrenheitFelder-32);
      document.getElementsByName("cell")[0].value = ergebnis;

}
    function toFahrenheit(celsiusFelder){
        var answer =  (celsiusFelder) * 9/5 + 32;
          document.getElementsByName("fahren")[0].value = answer;

}
function hideConverter(){
    var allElementsWitClassMyConverter = document.getElementsByClassName('MyConverter');
    var elementOne = document.getElementsByName('MyConverter')[0].value;
    //elementOne is either "Temp" or "Len"
    if(elementOne == "Temp"){
      //hide length converter
      document.getElementById('lengthDiv').className = "hide";
      document.getElementById('tempDiv').className = "";
    }
  else if(elementOne == "Len"){
    //hide temp converter
    document.getElementById('tempDiv').className = "hide";
    document.getElementById('lengthDiv').className = "sadasd";
  }

}
