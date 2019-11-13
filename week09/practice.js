$('#btn').on('click', function(){

var requestedData = new XMLHttpRequest();
requestedData.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
requestedData.onload = function(){
  var data = JSON.parse(requestedData.responseText);
$('.contents').html(data[0].name);


};
requestedData.send();
});
