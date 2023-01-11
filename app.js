document.write('Hello world');
console.log('hello there');
console.log('top of the morning');
let name = 'Savon';

// template literals using backticks
console.log(`Hi ${name}`);

let firstName = 'Nina';
const lastName = 'Huynh';
console.log(firstName, lastName);

// implicit type conversion
let number1 = '23';
let number2 = '10';
let result = number1 + number2;
console.log(result); // result is 2310, since it's string concatentation

// ---------------------------------------------------------------------------------------
// DATA TYPES - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

// ---------------------------------------------------------------------------------------
// ARRAYS, FUNCTIONS, AND OBJECTS
const friends = ['anna', 'nina', 'michelle', 'dave'];
console.log(friends);
console.log(friends[2]);
// assign array index 3 to bestFriend
let bestFriend = friends[3];
console.log(bestFriend);

/* Arrays Challenge

1. Create 'fruits' array and store some fruit values
2. set up the last item as number (random)
3. assign first fruit to the variable
4. reassign last array item to the actual fruits
5. log both first fruit variable and entire fruits array
*/

const fruits = ['apple', 'strawberry', 'watermelon', 'peach', 'banana', 4];
let firstFruit = fruits[0];
fruits[fruits.length - 1] = 'blueberry';
console.log(firstFruit);
console.log(fruits);

// ---------------------------------------------------------------------------------------
// FUNCTIONS - Declare, Invoke
// params - when declare/define
// placeholders, local vars
// argument - when invoke/call/run
// use vars/values, multiple params, undefined
function hello(person, age) {
  console.log(`Hello there ${person}. Happy ${age}th birthday.`);
}

hello('Bob', 29);
hello('Anna', 18);
hello('Susy', 10);
hello('Nina', 25);

// Function return
const wallHeight = 80;

function calculate(value) {
  //   let newValue = value * 2.54;
  return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

// Function expressions - another way to define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries

// function definition/declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

// function expression
// can delete the function name or leave it 'addValues'
// called anonymous function if no function name
const add = function (num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 6);
const values = [firstValue, secondValue, thirdValue, add(1, 2)];
console.log(values);

// ---------------------------------------------------------------------------------------
// OBJECTS - key/value pairs methods
// dot notation

const person = {
  name: 'savon',
  lastName: 'huynh',
  age: 20,
  faveSport: 'football',
};

console.log(person);
