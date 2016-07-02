// Javascript goes in here.

function nameCheck() {
  var x = document.forms['myForm']['name'].value;
  if(x == null || x == "") {
    alert("Name must be filled out.");
    return false;
  }
