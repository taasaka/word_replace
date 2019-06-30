let tarea = document.querySelector('textarea');
let findipt = document.querySelector('#findtxt');
let repipt = document.querySelector('#reptxt');
let btn = document.querySelector('button');
let elem = document.querySelector('#result')


btn.addEventListener('click', ()=>{
  let findtxt = findipt.value;
  let reptext = repipt.value;
  let tagtxt = tarea.value;
  findtxt = new RegExp(findtxt, 'g');
  tagtxt = tagtxt.replace(findtxt, reptext);
  elem.innerText = tagtxt;
});