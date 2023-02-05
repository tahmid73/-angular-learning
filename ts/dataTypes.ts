import { isVariableDeclaration } from "typescript";

let firstName: string
firstName = "Tahmid";
console.log(firstName);
let dob = "25";
let result = parseInt(dob);
let isValid: boolean = false;
console.log(isValid);
isValid = true;
console.log(isValid);

let datatype: Array<string>;

datatype = ["string", "number", "bool"]

let numbers: Array<number>;

numbers = [1, 2, 4, 5]


let sum = numbers.reduce((acc, num) => acc + num);
let anotherResult = datatype.filter((str) => str == "number");

//enum
enum colors {
    red,
    green,
    blue
}

let c: colors = colors.red;

function swapnumbers(num1: number, num2: number): [number, number] {
    return [num2, num1]
}

//any type 
let variable: any;

variable=10;
console.log(variable)
variable="any type data"
console.log(variable)

console.log(c)
console.log(sum)
console.log(anotherResult);
console.log(swapnumbers(1, 2));