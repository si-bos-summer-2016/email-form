// Javascript goes in here.

function validate(){

   var validateElements = document.getElementsByClassName("validate");

    var inputs = Array.prototype.filter.call(validateElements, function(element){
        return element.nodeName === 'INPUT';
    });
    /* ^ This Part is a little tricky */

    for(var i=0; i < inputs.length; i ++ ){
        var input = inputs[i];
        if(input.value.length == 0){
            input.placeholder = "This field is required!";
            input.classList.add("error");
        }
    }

}




