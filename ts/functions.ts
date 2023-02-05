function add(num1: number, num2: number): number {
    return num1 + num2
}

const sub = (num1: number, num2: number): number => num1 - num2

function addMulti(num1: number, num2: number, num3?: number): number
{
    return num3 ? num1 + num2 + num3 : num1 + num2
}

function add2(num1:number,num2:number,...num3:number[]):number
{
    return num1+num2+num3.reduce((a,b)=>a+b,0);
}

// function addName(firstName:string,middleName:string,...lastName:string[]):string{
//     return firstName+middleName+lastName.reduce((a,b)=>a+b)
// }


//generics
function getItems<Type>(item:Type[]):Type[]{
    return new Array<Type>().concat(item);
}


let concatResult=getItems<string>(['a','b','c'])
let concatResults=getItems<number>([2,3,4,])


console.log(concatResults)
console.log(concatResult)
console.log(add(10, 20))
console.log(sub(20, 10))
console.log(addMulti(10,20,25))
console.log(addMulti(10,20))

console.log(add2(10,20,30,25,35))