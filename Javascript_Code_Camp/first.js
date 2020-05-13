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
