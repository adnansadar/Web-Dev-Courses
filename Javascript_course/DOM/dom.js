//Examine the document object
//console.dir(document);
// console.log(document.domain);//127.0.0.1
// console.log(document.URL);
// console.log(document.title);//Item Lister
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);//gives output of full html doc as an array
// console.log(document.all[10]);//gets the 10th element
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//getElementById
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';//pays attention to the style of the tag used
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME
//Can be used with list items
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//getElementsByTagName
//var li = document.getElementsByTagName('li');//applies to all tags even though they dont have same class name
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

//For applying to multiple items, we have to traverse it using a for loop as it is an array of items
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

//querySelector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px black';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

var item = document.querySelector('.list-group-item');
item.style.color = 'blue';//by default this applies to the first item in the list.

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'red';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

//querySelectorAll
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[1].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#f4f4f4'//grey color
  even[i].style.backgroundColor = '#ccc';//dark grey
}

//Traversing the DOM

//parentNode/parentElement
var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//div is the parent of ul, input and form are siblings.

itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);//container

//children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstElementChild
console.log(itemList.firstElementChild);

//lastElementChild
console.log(itemList.lastElementChild);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousElementSibling
console.log(itemList.parentElementSibling);
itemList.previousElementSibling.style.color = 'green';

var newDiv = document.createElement('div');
newDiv.className = 'Hello';
console.log(newDiv);

newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title','Hello Div')

//Create text node(to add content inside the div)
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);

//Event Listener
var button = document.getElementById('button').addEventListener('click',buttonClick
);

function buttonClick(e){
   //alert('You Clicked');
   //document.getElementById('header-title').textContent = 'Changed';
  // document.querySelector('#main').style.backgroundColor = 'green';
  //Alternate way of doing it
  //document.getElementById('main').style.backgroundColor = 'green';

  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
  // var output = document.getElementById('output');
  // output.innerHTML = '<h3>'+e.target.id+'</h3';
  // console.log(e.type);//click
  // console.log(e.clientX);//mouse click x axis from the full window
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  
  
  
}


