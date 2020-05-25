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

//let and set
let catname = "Quincy";
catname = "Beau"//Correct way to change let by using set

// "use strict": this is typed at the start of JS file to catch common coding errors like variable not initialized.

//Use let mostly in the code as var has a global scope within a program.
//let has local scope as it is limited to a function
function checkscope(){
  "use strict";
  let i = "function scope";
  if(true){
      let i = "block scope";
      console.log("block scope i is ",i);
    }
    console.log("function scope i is ", i);
    return i;
}
checkscope();

//If you never want to reassign a variable, use const
const SENT = "this is amazing";
//const sent = "wow"; this will give an error
console.log(SENT);

//Array indices or objects can be modified
//GIVING ERROR
const s = [5,6,1];
function edit() {
  "use strict";
  s[0]=9;
  s[1]=0;
  s[2]=1;
}
edit();
console.log(s);

function freezeObj(){
  "use strict";
  const MATH_CONSTANTS = {
    PI : 3.14
  };
  Object.freeze(MATH_CONSTANTS);//value of objects remains fixed now.

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (e) {
    console.log(e);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

//arrow function
// var magic = function(){
//   return new Date();
// };
const MAGIC = () => new Date();//this is an arrow function
const myConcat = (arr1,arr2) => arr1.concat(arr2);// passing arr1 and arr2 as arguments and returns arr1.concat(arr2)
console.log(myConcat([1,2],[3,4,5]));

//finding nos in the array that are >0 and integers and return product of that no
const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-20];
const squareList = (arr) => { //Passes the array as input
  //The filter() method creates an array filled with all array elements that pass a test (provided as a function).
  const squareIntegers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x)
  return squareIntegers;//The map() method creates a new array with the results of calling a function for every array element.
};

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);

//Higher order arrow Functions
const increment = (function(){
  return function increment(number,value=1){
    return number + value;
  };
})();
console.log(increment(5,2));
console.log(increment(5));

const sum = (function(){
  return function sum(x,y,z){
    const args = [x,y,z];
    return args.reduce((a,b) => a+b,0);//sums up and returns the result, gives 6
    //The reduce() method reduces the array to a single value.
  };
})();
console.log(sum(1,2,3));

//same function using rest operator
const sum = (function(){
  return function sum(...args){ //can take in any no of arguments into args array
    //const args = [x,y,z];
    return args.reduce((a,b) => a+b,0);//sums up and returns the result, gives 6
  };
})();
console.log(sum(1,2,3,4));

//spread operator
//it spreads out contents of one array into the other and it will not be equal to it. Just creates a copy of the array.
const arr1 = ['jan','feb','mar','apr'];
let arr2;
(function() {
  arr2 = [...arr1];//spread operator
  arr1[0] = 'potato'
})();
console.log(arr2);

//Destructuring assignment to assign variable from objects
var vowel = {x:3.6,y:7.4,z:6.5};
/*var a = vowel.x
var b = vowel.y
var c = vowel.z
*/

const {x:a,y:b,z:c} = vowel;//a= 3.6..... Destructuring

//Nested
const LOCAL_FORECAST
= {
  today: { min:72, max:83},
  tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
  "use strict";
  const { tomorrow: {max: maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));//84.6

//Pass an object as function's parameters
//Used with API calls when a lot of information is received from a request
//Normal function
const stats = {
	max: 56.78,
	standard_deviation:4.34,
	median:34.5,
	mode:23.8
};
const half =(function()){
	return function half(stats){
		return(stats.max + stats.min)/2.0;
	};
})();
console.log(stats);
console.log(half(stats));

//Better way
const stats = {
	max: 56.78,
	standard_deviation:4.34,
	median:34.5,
	mode:23.8
};
const half =(function()){
	return function half({max,min}){//the whole object need not be passed
		return(max + min)/2.0;
	};
})();
console.log(stats);
console.log(half(stats));

const person = {
	name: "Adnan Sadar",
	age: 20
};

//``=Template literal supports multi-line strings, use of objects directly and use of" " ' ' without escape
const greeting = `Hello! My name is ${person.name}!
I am  ${person.age} years old. `;
console.log(greeting);


const result = {
	success:["max","no-amd"],
	failure:["min","amd"]
};
function makeList(arr){
	const resultDisplayArray = [];
	for(let i=0;i<arr.lenght;i++){
		resultDisplayArray.push(`<li class= "text warning"> ${arr[i]}</li> `)
	}
	return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)//min amd

const createPerson = (name,age,gender) =>{
	return{
		name:name,
		age:age,
		gender:gender
	};
};
console.log(createPerson("Adnan Sadar",56,"male"));

//Better way to create objects use if name:name and so on
const createPerson = (name,age,gender) =>({name,age,gender});
console.log(createPerson("Adnan Sadar",56,"male"));

//Better way for functions
const bicycle = {
	gear:2,
	setGear:function(newGear){
		"use strict";
		this.gear = newGear;
	}
};

bicycle.setGear(3);
console.log(bicycle.gear);//3

//2nd way
const bicycle = {
	gear:2,
	setGear:(newGear){
		"use strict";
		this.gear = newGear;
	}
};

bicycle.setGear(3);
console.log(bicycle.gear);//3

//Constructors
// var spaceShuttle = function(targetPlanet){//Constructor function
//   this.targetPlanet = targetPlanet;
// }
// var zeus = new spaceShuttle('Jupiter');//spaceShuttle object
// console.log(zeus.targetPlanet);

//using class syntax
class spaceShuttle{
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new spaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

//Setters and Getters

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp-32);
    }
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);//pass 76 to constructor
let temp = thermos.temperature;//no parenthesis remember
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
