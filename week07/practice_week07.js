let button = document.getElementById("btn");
button.addEventListener("click",functionName);
let spanVariable = document.getElementById("message");


//create a function to change spane contents

function functionName(){
  contents ="";
  for(let i =0; i<10;i++){
    let randomNumber = Math.floor(Math.random()*10)+1;
    contents = contents + " " + randomNumber;
  }
  spanVariable.innerHTML=contents;
}
