/*
What is Typescript?
It is a superset of javascript.
Why we should learn Typescript?
The main important thing is that in javascript we don't declare type.. for which in compile time we can't find any error . For example see below
Here we had passed a string .and a number . IN javascript it will add but oin case of typescript it will show error becasue we had to declare the type of that before adding


let num1="1"
function calculate(num1,num2){
    return num1 + num2
}
console.log(calculate(num1,3))

let num1=1
function calculate(num1:number,num2:number){
    return num1 + num2
}
console.log(calculate(num1,3))
*/
//example 2 --- Here we willl print sum of an array
function add(numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}
console.log(add([2, 3, 3, 4]));
