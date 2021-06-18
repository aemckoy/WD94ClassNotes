//strings
let phrase = "Hello"; 
//let myName = "Alicia"; 
//console.log(phrase + " " + myName); 
//console.log(`${phrase} ${myName}`)

// Boolean
let on = true; 
let off = false; 

//Null 
//intentional empty variable
let empty = null; 

//Undefined 
// starts empty but we intend to fill
let undef = undefined;
 

//Numbers
let degrees = 90; 
let precise = 999999999999999; 
console.log(precise); 

//Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `backsticks`;

let first = 1050 + 100; 
let second = "1050" + "100";
let third = 1050 + "100";
console.log(first, second, third);

//Objects
let frodo = {
    race: "Hobbit", 
    rings: 1, 
    cloak: true
}
console.log(frodo); 

//Arrays
let list = ["item1", "item2", "item3"]
// or can be written list this for just "object"
// let list = ["item1", 2, true]
console.log(typeof list); 

/*
DataType literals are fixed values that we as developers insert into 
the code, not data that is coming from a third party source.  
*/

let myName = "Alicia";
console.log(myName.length); 
//length is how many characters in lenght of the name in that string

console.log(myName.toUpperCase()); 

let home = "My home is in Indy";
console.log(home.includes("Indy")); 

let sent = "This sentance will be split into indivdidual parts";
console.log(sent.split(" ")); 
// it searched for a split by space, so we left a space in the ""

