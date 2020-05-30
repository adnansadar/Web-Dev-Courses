//import function
import { capitalizeString } from "./string_function"//path is curr dir and file name
const cap = capitalizeString("hello!");
console.log(cap);

//export function
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export {capitalizeString};

export const foo = "bar";//export a constant
export const bar = "foo";

//import *
import * as capitalizeString from "string_function";

//export only one thing from the file
export default function subtract(x,y) {return x-y;}
