//Question 1
var mealType = "lunch";

//Question 2
var person = {
  name: "Emilie",
  age: 26
};

//Question 3
var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

//Question 4
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Question 5
for (var i = 15; i <= 25; i++) {
  console.log(i);
}

//Question 6
for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

//Question 7
var animalsArray = [
  {
    type: "cat",
    age: 5,
    isFemale: true
  },
  {
    type: "dog",
    age: 10,
    isFemale: false
  }
];

for (var i = 0; i < animalsArray.length; i++) {
  console.log(animalsArray[i].age);
  console.log(animalsArray[i].isFemale);
}

//Question 8
function whatIDontLike(objectIDontLike) {
  console.log("I don´t like " + objectIDontLike);
}

whatIDontLike("horses");

//Question 9
function subtractNumbers(firstNumber, secondNumber) {
  var result = firstNumber - secondNumber;
  console.log(result);
}

//Question 10
var emptyArray = [];

function thingsILike(arrayItem) {
  emptyArray.push(arrayItem);
}

thingsILike("Chocolate Ice cream");
