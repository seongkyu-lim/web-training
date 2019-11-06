const mytextarea=document.getElementById('my-textarea');
const remainingCharsText=document.getElementById('my-textarea-remaining-chars')

var canvas = document.querySelector("canvas");

const pageHeading = document.getElementById('heading1');

mytextarea.addEventListener('input',()=>{
  const remaing = MAX_CHARS - mytextarea.value.length;
  console.log(remaing);
  remainingCharsText.textContent=remaining + 'Character';
})
