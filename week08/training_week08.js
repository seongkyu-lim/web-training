const mytextarea = document.getElementById("my-textarea");
const remainingCharsText = document.getElementById("my-textarea-remaining-chars");
const MAX_CHARS = 300;


mytextarea.addEventListener('input',()=>{
  const remaining = MAX_CHARS - mytextarea.value.length;
  console.log(remaining);
  remainingCharsText.textContent = remaining + ' Characters remaining';
})
