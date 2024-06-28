import _ from 'lodash';
import './style.css';

const left = document.getElementById("left");
const right = document.getElementById("right");
const mainTitle = document.createElement("div");

const bt = document.createElement("button");

const dialog = document.getElementById("f");
const submit = document.getElementById("submit");

const note = document.getElementById("note");
const name = document.getElementById("name");
var c1 ;
var c2;

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
  
  localStorage.setItem('c1', name.value);
  localStorage.setItem('c2', note.value);


  array.push(localStorage.getItem('c1'));
  array2.push(localStorage.getItem('c2'));
  localStorage.setItem('arr', array);
  localStorage.setItem('arr2',array2);  
  




  bit.addEventListener('click', ()=> {
    card.remove();
    
  });
     

  dialog.close();

});

  console.log(localStorage.getItem("arr"));




if(!localStorage.getItem('c1text')){
  populateStorage();
} else {
  setStyles();
}

function populateStorage(){
 

  setStyles();
}
console.log(localStorage)

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
  
  console.log(localStorage)
  
  card1.innerHTML = localStorage.getItem('arr').split(',')[index];
  card2.innerHTML = localStorage.getItem('arr2').split(',')[index];
  bit.addEventListener('click', ()=> {
    localStorage.getItem('arr').split(',').splice(index,1);
    localStorage.setItem('arr',localStorage.getItem('arr').split(',').splice(index,1));
    localStorage.getItem('arr2').split(',').splice(index,1);
    localStorage.setItem('arr2',localStorage.getItem('arr2').split(',').splice(index,1));
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












