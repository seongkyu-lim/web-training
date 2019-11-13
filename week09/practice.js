// var h1Tag = document.,getElementsByClassName('headTitle')
// h1tag[0].innerHTML = 'welcome to JQuery Class '

$('headTitle').html('welcome to JQuery Class');

$('.container h1').html ('welcome to JQuery Class');

$('#btn').on('click', functionName);
function functionName(){
  $('headTitle').html('you pressed the button');
  $('.headTitle').css('color','red');
  $('#outside').toggle(2000);
}
