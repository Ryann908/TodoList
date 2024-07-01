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
let i = 0;


bt.addEventListener('click', ()=> {
  dialog.showModal();
});
//sets the cards for display 
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


  

  

  dialog.close();
  location.reload();

});

//variables for deletion 
var deleted_data = JSON.parse(localStorage.getItem('data'));
var deleted_data2 = JSON.parse(localStorage.getItem('data2'));


//creates the local cards
if(localStorage.getItem('data') != null){
  let r  =   JSON.parse(localStorage.getItem('data'));
 r.forEach(() => {
  const card = document.createElement("div");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");
  const bit = document.createElement("button");

  card.setAttribute("id","card");
  card1.setAttribute("id","card1");
  card2.setAttribute("id","card2");

  bit.setAttribute("id","cardbt");
  bit.setAttribute("data-index",index)
  bit.innerHTML = "X";



  card1.innerHTML = JSON.parse(localStorage.getItem('data'))[index];
  card2.innerHTML = JSON.parse(localStorage.getItem('data2'))[index];
//FORCED reload to make sure the index resets so that it deletes the right one 
//Deletes the cards at data-index
  bit.addEventListener('click', ()=> {
    console.log(bit.getAttribute("data-index"));
    deleted_data.splice(bit.getAttribute("data-index"),1);
    deleted_data2.splice(bit.getAttribute("data-index"),1);
  localStorage.setItem('data', JSON.stringify(deleted_data));
  localStorage.setItem('data2', JSON.stringify(deleted_data2));
  card.remove();
  location.reload();

  });
 
  right.appendChild(card);
  card.appendChild(card1);
  card.appendChild(card2);
  card.appendChild(bit);
  index++;
 });
}











