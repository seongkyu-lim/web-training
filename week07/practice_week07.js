let button = document.getElementById("btn");
button.addEventListener("click",functionName);
let spanVariable = document.getElementById("message");


//create a function to change spane contents

function functionName(){
  spanVariable.innerHTML="message come from javascript";
}
