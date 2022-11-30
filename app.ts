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

// function add(numbers:number[]){    /* orelse here we can define in genric functionadd(numbers:Array<number>)*/ 
//     return numbers.reduce((acc,item)=>{
//         return acc+ item
//     },0)
// }
// console.log(add([2,3,3,4]))

/*
In javaScript if we had any object then we are not grtting auto complete of the child present in it but in case of javascript we will get the auto complete

*/


// let user={
//         firstName:'Sachikanta',
//         LastName:'Raul',
//         Age:23,
// }
// console.log(user.Age)



/**
inbuilt type in ts are
number
string 
number[]
boolean 


but in ts we can also build customs type i.e alias
Note:
for creating custom type the syntax-- first letter should be in capital
 */


type User ={
        name:string
        Age:number
        Address?:string
}


/**
 * Note : if we define any custom type then it will accept of data what we had declare rather than it will not accept any thing
 * for example see below . The user is showing error as it will not accept any other data except what we declare.
 * Another main thing is that we had to declare all the data in the object what we had define, orelse it will give error.
 * 
 * If we had to make something optional in the type than we had to add ? after the type 
 * for ex address? string 
 * 
 */

// let user:User={
//     animal:apple,
//     cow:plant
// }

/**
 * correct method
 */
let user:User={
    name:'Sachikanta Raul',
    Age:23
}