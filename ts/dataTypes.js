"use strict";
let firstName;
firstName = "Tahmid";
console.log(firstName);
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
isValid = true;
console.log(isValid);
let datatype;
datatype = ["string", "number", "bool"];
let numbers;
numbers = [1, 2, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num);
let anotherResult = datatype.filter((str) => str == "number");
//enum
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
})(colors || (colors = {}));
let c = colors.red;
function swapnumbers(num1, num2) {
    return [num2, num1];
}
console.log(c);
console.log(sum);
console.log(anotherResult);
console.log(swapnumbers(1, 2));
