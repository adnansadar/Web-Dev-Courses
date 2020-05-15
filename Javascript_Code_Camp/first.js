//This is a single line comment
/*This is a
multi line comment*/
/*Data types:
undefined, null, bolean, string, symbo, number, object*/
var myName = "Bee" //can be used throughout the program
myName = "Honey" //value changed
let ourName = "Adnan"//can be used in the scope where it's declared
const pi = 3.14 //value doesn't change throughout

var a;
a=5;
var b = 2;
console.log(a);//value printed here will also be 7 as JS runs in an asynchronous manner,so a is assigned below it takes the value from there.
a++;
console.log(a);
var product= 2.0*2.5; //var is used to store float too
a+=5;
a-=5;
var str = "I am a \"double quote\" string inside \"double quotes\"";
var str2 = `I am a "double quote" string and i am 'single quote' `;
/* \\ backslash, \n newline, \r carriage return, \t tab, \b backspace, \f form feed */

//Concatenation
var str3 = "This is 1st. " + "This is 2nd";
console.log(str3);
var str3 = "This is 1st. ";
str3+= "I'm 2nd";
console.log(str3);
name = "Adnan";
name2 = "my name is ";
name2+= name;
console.log(name2);

//Length
name = "Adnan";
var len = name.length;
console.log(len);//5

//Strings are immutable
var str4 = "Jello World";
//str4[0] = "H";//Doing this gives an error
str4 = "Hello World" //Change full string altogether
function wordBlanks(Noun,Adjective,Verb,Adverb) {
  var result = "";
  result += "The " + Adjective + " " +Noun + " " +Verb + " to the  store " +Adverb;
  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

//Arrays
myArr= ["Hello", 1];
console.log(myArr);
//Array indexes can be modified later on
//push an item
myArr.push("yo");
//pop function
myArr.pop()
//shift function: Removes 1st element from an Array
var removedArr = myArr.shift();
//unshift Function: Adds to the beginning
 myArray.unshift("hello");

 //Functions
 function fun1(a,b){ //notice that no data type is defined
   console.log(a-b);
 }

 fun1(10,5);

 //Local and global variables
 var myGlobal = 10; //Global variable

 function fun1(){
   oopsGlobal = 5; // this is also a global variable as it doesnt have any datatype assigned.
 }

 function fun2() {
   var output = "";
   if (typeof myGlobal != "undefined"){
     output += "myGlobal" + myGlobal +"\n" ;
   }
   if (typeof oopsGlobal != "undefined"){
     output += "oopsGlobal" + oopsGlobal+ "\n";
   }
   console.log(output);
 }
 fun1();
 fun2();
 //if 2 variables have the same name then the local variable takes precedence when the fuction is called.
 //Array to String
 var testArr = [1,2,3,4,5];
 console.log("String: " + JSON.stringify(testArr));
 // 3==='3' checks datatype too while comparing
 // 10 !== 17 strict inequality
 //if, elseif, else, &&, ||
 //switch case similar to C

 //Multiple identical opions in switch case
 function seqsizes(val){
   answer = "";
 switch(val){
 case 1:
 case 2:
 case 3:
 answer = "low";
 break;
 break;
 case 4:
 case 5:
 case 6:
 answer = "mid";
 break;
}
return answer;
}
console.log(seqsizes(2));

//Objects
var ourDog = {
  "name": "Tuffy",//property:value
  "legs": 4,
  "tails": 1,
  "friends": ["everyone"]
};//remember the semi colon sign
var nameval = ourDog.name; //Tuffy
var namevalue = ourDog["name"]; //Tuffy
ourDog.name = "Feedo"; //Changing value of an object
ourDog.bark = "bow-wow"; //adding a property bark having value "bow-wow" to the object
ourDog['sound'] = "woof";
delete ourDog.tails;//delete property
//Objects can be used instead of switch case
var check = ourDog.hasOwnProperty("eyes");//False
//Multiple Objects can be added inside an array

var myStorage = {// Nested Object
	"car":{
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

var gloveBox = myStorage.car.inside["glove box"];//maps
var gloveBox2 = myStorage[0].inside[0];
console.log(gloveBox)
console.log(gloveBox2)

//Loops
var myArray = [];
var i = 0;
while(i<6){
	myArray.push(i);
	i++;
}
console.log(myArray);//1,2,3,4
//Loops similar to C Language
//Nested Loops
function multiplyAll(arr) {
	var product = 1;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[j].length; j++) {
				product *= arr[i][j];
		}
	}
	return product;
}
var product = multiplyAll([1,2],[3,4],[5,6,7]);
console.log(product);
//Math.random() : 0<return<1
//Math.floor()
// Random nos within a range
function randrange(min,max) {
	// body...
	return Math.floor(Math.random()*(max-min +1))* min;
}
randrange(1,9)
console.log()
//parseInt(str) Integer to string
//parseInt(str,2) radix=2 it is a binary no by dafault its 10, here str=11001 for ex
//ternary operator
a=10;
b=10;
var check(){
return a===b ? true:false
}
var check2= check();
console.log(check2);

function checksign(num) {
	// body...
	return num>0 ? "positive" : num<0 ? "negative" : "zero"
}
console.log(checksign(10));
