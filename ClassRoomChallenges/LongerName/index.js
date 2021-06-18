/* BRONZE

Write two variables. 
One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. 
Console log how many letters are in each name.

*/

/* SILVER

Expand on what you have already done and write a conditional to see 
who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.

*/


let myName = "Alicia";
let friendName = "Sam";
//console.log(myName);
//console.log(myName2);
//console.log(myName.length); 
//console.log(myName2.length); 


let myName3 = "Rob's";
let phrase = "My name is longer than"; 
console.log(phrase + " " + myName3);

//could also be friendName 
// end of bronze challenge


myNameLength = myName.length;
friendNameLength = friendName.length;

if (myNameLength > friendNameLength) {
   console.log(`${myName}'s name is longer than ${friendName}'s`); 
} else if (myNameLength < friendNameLength) {
    console.log(`${friendName}'s name is longer than ${myName}'s`);
} else {
    console.log(`${friendName} and ${myName} are the same length`);
}

let phrase2 = "Alicia's name is"
let phrase3 = "letters longer than Sam's."
console.log(phrase2 + " " + friendName.length + " " + phrase3)

if (myNameLength > friendNameLength) {
    console.log(`${myName}'s name is longer than ${friendName}'s by ${myNameLength - friendNameLength} letter's`); 
 } else if (myNameLength < friendNameLength) {
     console.log(`${friendName}'s name is longer than ${myName}'s by ${myNameLength} letter's`);
 } else {
     console.log(`${friendName} and ${myName} are the same length`);
 }

 //could have also stored a variable difference 
 
 let difference = myNameLength - friendNameLength;

/* GOLD

In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that 
has not been mentioned so far. See if you can add that to your conditional!

*/