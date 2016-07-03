// Javascript goes in here.

// This creates an array to check if fields are empty
function validate(){

   var validateElements = document.getElementsByClassName("validate");

    var inputs = Array.prototype.filter.call(validateElements, function(element){
        return element.nodeName === 'INPUT';
    });

    for(var i=0; i < inputs.length; i ++ ){
        var input = inputs[i];
        if(input.value.length == 0){
            input.placeholder = "This field is required!";
            input.classList.add("error");
        }
    }

}




