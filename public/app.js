// Javascript goes in here.

function nameCheck() {
  var x = document.forms["myForm"]["name"].value;
  if(x == null || x == "") {
    var error = document.getElementByClassName("nameError");
    var y = document.createElement("p")                
    var z = document.createTextNode("You must enter your name.");    
    error.y.appendChild(z); 
  }
};


