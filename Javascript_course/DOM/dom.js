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
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//For applying to multiple items, we have to traverse it using a for loop as it is an array of items
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4';
}
