var c = document.querySelector('#c');
var ctx = c.getContext('2d');


ctx.fillRect(0,0,40,40);
ctx.fillRect(0,80,40,40);
ctx.fillRect(0,160,40,40);
ctx.fillRect(0,240,40,40);
ctx.fillRect(0,320,40,40);
ctx.fillRect(80,0,40,40);
ctx.fillRect(80,80,40,40);
ctx.fillRect(80,160,40,40);
ctx.fillRect(80,240,40,40);
ctx.fillRect(80,320,40,40);
ctx.fillRect(160,0,40,40);
ctx.fillRect(160,80,40,40);
ctx.fillRect(160,160,40,40);
ctx.fillRect(160,240,40,40);
ctx.fillRect(160,320,40,40);
ctx.fillRect(240,0,40,40);
ctx.fillRect(240,80,40,40);
ctx.fillRect(240,160,40,40);
ctx.fillRect(240,240,40,40);
ctx.fillRect(240,320,40,40);
ctx.fillRect(320,0,40,40);
ctx.fillRect(320,80,40,40);
ctx.fillRect(320,160,40,40);
ctx.fillRect(320,240,40,40);
ctx.fillRect(320,320,40,40);
ctx.fillRect(40,40,40,40);
ctx.fillRect(40,120,40,40);
ctx.fillRect(40,200,40,40);
ctx.fillRect(40,280,40,40);
ctx.fillRect(40,360,40,40);
ctx.fillRect(120,40,40,40);
ctx.fillRect(120,120,40,40);
ctx.fillRect(120,200,40,40);
ctx.fillRect(120,280,40,40);
ctx.fillRect(120,360,40,40);
ctx.fillRect(200,40,40,40);
ctx.fillRect(200,120,40,40);
ctx.fillRect(200,200,40,40);
ctx.fillRect(200,280,40,40);
ctx.fillRect(200,360,40,40);
ctx.fillRect(280,40,40,40);
ctx.fillRect(280,120,40,40);
ctx.fillRect(280,200,40,40);
ctx.fillRect(280,280,40,40);
ctx.fillRect(280,360,40,40);


for (var i=0; i<60; i++){
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.arc(Math.floor(Math.random()*(500)+1), Math.floor(Math.random()*(500)+1), 20, 0 ,2*Math.PI);
  ctx.stroke();
}

/*
for (var i=0; i<200; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  ctx.beginPath();
  ctx.arc(x,y,5,0,MATH.PI*1.5, false);
  ctx.strokeStyle = 'blue';
  ctx.stroke();
}

-> 원이 뜨지 않아 새로 짬. -> 대신 화면 전체에 원이 뜨지않고 캠퍼스에 제한적
*/
