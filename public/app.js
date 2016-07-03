// Javascript goes in here.

// This creates an array to check if fields are empty
function validate(){

   // Grabs any HTML element with a class of "validate"
   var validateElements = document.getElementsByClassName("validate");
   
   // Creates an array of any items from the previous validateElements variable
   // that have a nodename of "input".
    var inputs = Array.prototype.filter.call(validateElements, function(element){
        return element.nodeName === 'INPUT';
    });
   
   // Loops through the inputs array to see if any of the fields are empty.
    for(var i=0; i < inputs.length; i ++ ){
        var input = inputs[i];
        if(input.value.length == 0){
            input.placeholder = "This field is required!";
            input.classList.add("error");
        }
    }

}




