//Strings are used to store words, numbers. 
//You can store two strings together (string concatonate) ('this is a ' + 'string')


//console.log('My name is Quincy ' + 'and I am practicing strings')

//to select a specific character in a string
//remember that computers start count at 0 not 1

console.log('Quincy'[0]);

console.log('Hello World'[10]);

// to find and print character in a stored variable

let name = 'Quincy'; // declaring variable name as 'Quincy'

console.log(name[0]) // this will print 'Q'

// to print length of string stored in avariable

console.log(name.length) // this will print '6'

// To find last index of string stored in a variable

console.log(name[name.length-1]) //this will print 'y'

// Number data types
// -2
// -10.5
// -5

// Operators
// + addition
// - subtraction
// * multiply
// / Division
// % (modulo) Or remainder

// booleans are true of false data types

// Null & Undefined Data types
// Null = refers to the value of nothing. Developes will assign null if they want it to equal to nothing
// Undefined = Is a value that was never set in the first place. Doesn't exist

// VARIABLES = used to store data
// Let
// const

let firstName = 'Quincy'; 

// convert temperatures
// celsius to fahrenheit formula :
// F = C x 1.8 + 32

let celsius = 10;

let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

// Equality
// "==" double equals checks the values
// "===" triple equals checks the values and the types
// "!==" is not equal to

let bool = '1' == 1;

console.log(bool);

// CONDITIONALS

let subscribed = false;
let loggedIn = true;

if (subscribed ===  true) {
    console.log('show the video');
} else if (loggedIn === true) {
   console.log('tell the user to upgrade their subscription')
} else {
    console.log('tell user to log into account')
}

let cash = 48;
let price = 40;
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra, here's ${difference} dollars in change`)
} else if  (cash === price){
    console.log("you paid the exact amount, have a nice day!")
} else {
    console.log(`not enough money, you still owe ${difference * -1} dollars`)
}

// LOGICAL OPERATORS 

let cash = 50;
let price = 40;
let isStoreOpen= false;

if (cash >= price && isStoreOpen) {
    console.log('print the receipt')
} 