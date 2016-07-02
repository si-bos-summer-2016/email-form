// Javascript goes in here.

function nameCheck() {
  var x = document.forms["myForm"]["name"].value;
  if(x == null || x == "") {
    var error = document.getElementByClassName("nameError");            
    var message = document.createTextNode("You must enter your name.");    
    error.appendChild(message); 
  }
};


