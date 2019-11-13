var comingdate = new Date("Nov 13, 2019 20:45:00");

var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

var x = setInterval(function() {
  var now = new Date();

  var timeGap = comingdate.getTime() - now.getTime();
  console.log(timeGap);

  var days = Math. floor(timeGap / (1000*60*60*24));
  var hours = Math.floor(timeGap % (1000*60*60*24) / (1000*60*60));
  var mins = Math.floor(timeGap % (1000*60*60)/(1000*60));
  var secs = Math.floor(timeGap % (1000*60)/(1000));

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

if(timeGap <= 0){
  clearInterval(x);
  alret("Ooppppps! You are late!");
}

},1000)

function getTrueNumber(x){
  if (x < 10)
    return '0' + x;
  else
    return x;
}
