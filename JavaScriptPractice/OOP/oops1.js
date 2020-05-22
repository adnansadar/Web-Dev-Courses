//Factory function
function createCircle(radius) {
	return{
		radius,
		draw: function(){
			console.log('draw');
		}
	};
}

const circle = createCircle(2);
console.log(circle);

//Constructor function
function Circle(radius) {
	console.log('this',this);
	this.radius = radius;
	this.draw = function(){
		console.log('draw');
	}
}
const circle2 = new Circle(1);
//3 tasks performed by "new":
//1."new" keyword creates an empty object of name "Circle".
//2. "this" keyword points to the object in which it is currently.
//By default it points to the global object.So "this" is used to point to the local one.
//3. There is no return statement as it will get returned automatically when "new" keyword is used.

//In JS functions are objects
Circle.call({},1);//Empty object also passed during function call.
//The other way: const circle2 = new Circle(1);
let x = {value:10};//when we use an object, the value is not stored in the variable. The address(reerence) of the mem loc where its stored is given to x 
let y=x;//y also 20
x.value =20;//x=20
let i = 10;
let j=i;//j remains 10 in this case
let x = 20;
//Therefore primitives are copied by their value and objects by their references.
//primitives=data type(Number,String,Boolean)
//Pass by value
let x=10;

function increase(x){
	x++;
}
increase(x);//value still remains 10 as the scope of 10 is limited outside the function so its increasing value of another x variable
console.log(x);

//Pass by reference
let obj = {value:10};
function increase(obj){
	obj.value++;
}

increase(obj);//address is passed in this case so value increments
console.log(obj);



