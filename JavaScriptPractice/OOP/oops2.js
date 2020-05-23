const s1 = 'hello';
console.log(typeof s1);//string

const s2 = new String('hello');
console.log(typeof s2);//object
//when we use a method it returns s2 as an object(working behind the scenes due to method call)
console.log(window);//window is the parent object in JS
//window.alert(1);
alert(1);//1 output in the alert window 
console.log(navigator.appVersion);

const book1 = {
	title: 'Book 1',
	author: 'John Doe',
	year: '2013',
	getSummary: function(){
		return `${this.title} was written by ${this.author}`;
	}
};

const book2 = {
	title: 'Book 2',
	author: 'James Hales',
	year: '2015',
	getSummary: function(){
		return `${this.title} was written by ${this.author}`;
	}
};

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));

//Constructor
function Book(title,author,year){
	this.title = title;
	this.author = author;
	this.year = year;
}

const book1 = new Book('Book one', 'John Doe','2013');
const book2 = new Book('Book two', 'James Hales','2015');

// console.log(book1);
// console.log(book2);

Book.prototype.getSummary = function() {
	return `${this.title} was written by ${this.author}`
};

const book1 = new Book('Book one', 'John Doe','2013');
const book2 = new Book('Book two', 'James Hales','2015');

console.log(book2);


//Inheritance

//Magazine Constructor
function Magazine(title,author,year,month) {
	Book.call(this,title,author,year);
	this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1 = new Magazine('Mag1','John Doe','2018','Jan');

console.log(mag1.getSummary(1));//to getSummary() you have to inherit prototype seperately

//Create Object const book1 = Object.create(bookProtos)
//book1.title = "Book One";

//2nd way
//const book1 = Object.create(bookProtos,{
//	title: {value: 'Book One'}
//})

//Class
class Book{
	constructor(title,author,year){
		this.title = title;
		this.author = author;
		this.year = year;
	}

	static topBook(){//Does not require object creation to get called
		return 'Percy Jackson';
	}
}

//Instantiate Object
const book1 = new Book('Book one', 'John Doe','2013');
console.log(book1);

console.log(Book.topBook());