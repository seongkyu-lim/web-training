var input = document.getElementById('input');
var bns = document.getElementById('refile');
var resultArea = document.getElementById(:reult);

btn.addEventListener('clic'.function(

  if (!window.File || window.FileReader){
    alert('your brower does not support file reaiding');
    return ;
  };

  else if (!input.files. length){
    alert ('no file select');
  };
  else {
    var fileName = input.files[0];
    var reader = new FileReader();
    reader.readAsText(fileName, 'euc-kr');
    reader.onload = function(){
      resultArea.value= reader.result;
    }

  };

){})
