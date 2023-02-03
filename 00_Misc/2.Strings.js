// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const resultExercise3 = Number(numberOne)+Number(numberTwo);
console.log(resultExercise3);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const resultExercise4 = (Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2);
console.log(resultExercise4);


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const resultExercise5 = ((one + two + three)/3).toFixed(5);
console.log(resultExercise5);



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const index = letters.indexOf('c')
const resultExercise6 = letters[index]
console.log(resultExercise6);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const resultExercise7 = fact.replace('j','J');

console.log(resultExercise7);

// --------------------------------------
