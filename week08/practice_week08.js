var containner = document.getElementsById('wrapperid');
var array = containner.childNodes;
for (let i=0;i<array.length; i++){
  console.log(array[i]);
}
array[1].style.background = 'red';
