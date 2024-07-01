

const left = document.getElementById("left");
const right = document.getElementById("right");
const mainTitle = document.createElement("div");
const bt = document.createElement("button");
const dialog = document.getElementById("f");
const submit = document.getElementById("submit");
const note = document.getElementById("note");
const name = document.getElementById("name");


mainTitle.setAttribute("id","title");

bt.setAttribute("id","add");

mainTitle.innerHTML = "ToDo-List";
bt.innerHTML = "Add task"


left.appendChild(mainTitle);
left.appendChild(bt);

const array = [];
const array2 = [];
let index = 0;


bt.addEventListener('click', ()=> {
  dialog.showModal();
});

submit.addEventListener('click', ()=> {
  const card = document.createElement("div");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");

  const bit = document.createElement("button");

  card.setAttribute("id","card");
  card1.setAttribute("id","card1");
  card2.setAttribute("id","card2");

  bit.setAttribute("id","cardbt");
  bit.innerHTML = "X";


  card1.innerHTML = name.value;
  card2.innerHTML = note.value;
  right.appendChild(card);
  card.appendChild(card1);
  card.appendChild(card2);
  card.appendChild(bit);



  array.push(name.value);
  array2.push(note.value);
  localStorage.setItem('arr', array);
  localStorage.setItem('arr2',array2);  
  

  bit.addEventListener('click', ()=> {
    card.remove();
    
  });
     

  dialog.close();

});

  






function setStyles(){

  if(localStorage.getItem('arr') != '') {
  localStorage.getItem('arr2').split(',').forEach(() => {

  const card = document.createElement("div");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");

  const bit = document.createElement("button");

  card.setAttribute("id","card");
  card1.setAttribute("id","card1");
  card2.setAttribute("id","card2");

  bit.setAttribute("id","cardbt");
  bit.innerHTML = "X";
  
  console.log(String(localStorage.getItem('arr').split(',').splice(index,1)));
  card1.innerHTML = localStorage.getItem('arr').split(',')[index];
  card2.innerHTML = localStorage.getItem('arr2').split(',')[index];
  

  bit.addEventListener('click', ()=> {
    localStorage.setItem('arr',String(localStorage.getItem('arr').split(',').splice(index,1)));
    localStorage.setItem('arr2',String(localStorage.getItem('arr2').split(',').splice(index,1)));
    card.remove();
  });
 
  right.appendChild(card);
  card.appendChild(card1);
  card.appendChild(card2);
  card.appendChild(bit);
  index++;
  
});
  }
}
console.log(localStorage);
setStyles();







///////////////////////

// WW code below

import _, { set } from 'lodash';
import './style.css';

const left = document.getElementById("left");
const right = document.getElementById("right");
const mainTitle = document.createElement("div");
const bt = document.createElement("button");
const dialog = document.getElementById("f");
const submit = document.getElementById("submit");
const note = document.getElementById("note");
const name = document.getElementById("name");


mainTitle.setAttribute("id","title");

bt.setAttribute("id","add");

mainTitle.innerHTML = "ToDo-List";
bt.innerHTML = "Add task"


left.appendChild(mainTitle);
left.appendChild(bt);

const array = [];
const array2 = [];
let index = 0;


bt.addEventListener('click', ()=> {
  dialog.showModal();
});

submit.addEventListener('click', ()=> {
  const card = document.createElement("div");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");

  const bit = document.createElement("button");

  card.setAttribute("id","card");
  card1.setAttribute("id","card1");
  card2.setAttribute("id","card2");

  bit.setAttribute("id","cardbt");
  bit.innerHTML = "X";


  card1.innerHTML = name.value;
  card2.innerHTML = note.value;
  right.appendChild(card);
  card.appendChild(card1);
  card.appendChild(card2);
  card.appendChild(bit);

  var new_data = name.value;
  var new_data2 = note.value;

  if(localStorage.getItem('data') == null){
    localStorage.setItem('data', '[]');
    localStorage.setItem('data2', '[]');
  }
  
  var old_data = JSON.parse(localStorage.getItem('data'));
  old_data.push(new_data);
  var old_data2 = JSON.parse(localStorage.getItem('data2'));
  old_data2.push(new_data2);
  
  localStorage.setItem('data', JSON.stringify(old_data));
  localStorage.setItem('data2', JSON.stringify(old_data2));


  

  bit.addEventListener('click', ()=> {
    card.remove();
    
  });

  dialog.close();

});




if(localStorage.getItem('data') != null){
  let r  =   JSON.parse(localStorage.getItem('data'));
  console.log(r);
 r.forEach(() => {
  const card = document.createElement("div");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");
  const bit = document.createElement("button");

  card.setAttribute("id","card");
  card1.setAttribute("id","card1");
  card2.setAttribute("id","card2");

  bit.setAttribute("id","cardbt");
  bit.innerHTML = "X";
  
  
  card1.innerHTML = JSON.parse(localStorage.getItem('data'))[index];
  card2.innerHTML = JSON.parse(localStorage.getItem('data2'))[index];
  bit.addEventListener('click', ()=> {
    console.log(JSON.parse(localStorage.getItem('data'))[index]);

    localStorage.removeItem(JSON.parse(localStorage.getItem('data'))[index]);
    localStorage.removeItem(JSON.parse(localStorage.getItem('data2'))[index]);
    card.remove();
  });
 
  right.appendChild(card);
  card.appendChild(card1);
  card.appendChild(card2);
  card.appendChild(bit);
  index++;
 });
}













