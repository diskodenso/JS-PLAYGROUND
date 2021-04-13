console.log("Starting javascript...")
var myName = "Denis"
console.log(myName)
var myAge = 27
console.log(myAge)
var juliaAge = 32
var ageDiff = 27 - 32
console.log(ageDiff)
var myNumber = 21
if (myAge > myNumber) {
    console.log("You are older than 21")
}  else {
    console.log("You are not older than 21")
}
if (juliaAge > myAge) {
    console.log("Julia is older than you")
} else if (myAge > juliaAge) {
    console.log("Julia is younger than you")
} else {
    console.log("You have the same age as Julia")
}
var arrayOfNames = ["Chirag", "Moe", "Laura", "Michelle", "Natalia", "Oded", "Ottavia"]
arrayOfNames.sort()
console.log(arrayOfNames);

console.log(arrayOfNames[0]);
console.log(arrayOfNames[arrayOfNames.length - 1]);

for (i = 0; i < arrayOfNames.length; i++){
    console.log(i);
    console.log(arrayOfNames[i]);

}

// Exercise 2
// Create an array with all the ages of the students in your class.
// Iterate the array using a while loop, and then print every age in the console.
// Add a conditional inside the while loop to only print even numbers.
// Write again a loop but use a "for" loop instead of a "while" loop.
// Save your changes to your JavaScript file.Reload the HTML page in your browser.
// You should see every age printed, then only the even numbers printed.

let studentsAge = [30, 36, 28, 19, 69, 43, 25];
var i = 0;
while (i < studentsAge.length) {
    console.log(studentsAge[i]);
i++;
}

var i = 0;
while (i < studentsAge.length) {
    if (studentsAge[i] % 2 === 0) {
        console.log(studentsAge[i]);
        }
    i++;
    }
   

// Exercise 3
// Write a function that receives an array as a parameter and prints the lowest number in the array to the console.
// Save the changes to your JavaScript file.Reload the HTML page in your browser.
// You should see the lowest number in the array printed in the console.If not, investigate and fix it.


function findMin(array) {
    var i;
    var min = Infinity;
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log(findMin(studentsAge));

let studAge = [30, 36, 28, 19, 69, 43, 25];
function findMax(array) {
    var i;
    var max = -Infinity;
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
return max;
}
console.log(findMax(studAge));

// Exercise 5
// Write a function that receives two parameters, an array, and an index. 
// The function will print the value of the element at the given position(one - based) to the console.
// For example, given the following array and index, the function will print '6'.
// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1; 
// Save the changes to your JavaScript file and check your browser console.
// You should see the number at the correct index printed in the console.If not, investigate and fix it.


let example = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
printVal(example, 1);

function printVal(array, i) {
    console.log(array[i]);
}

// Write a function that receives an array and only prints the values that repeat.
// For example, given the following array and index, the function will print '6,23,33,100'.

function dabel(array) {
    let seen = [];
    let twice = [];
    for (let i = 0; i < array.length; i++) {
        if (seen.includes(array[i])) {
            twice.push(array[i])
        } else {
            seen.push(array[i])
        }
    }
    for (let i = 0; i < twice.length; i++) {
        console.log(twice[i])

    }
}

dabel(example);


// Write a simple JavaScript function to join all elements of the following array into a string.
// myColor = ["Red", "Green", "White", "Black"];

// function myColor() { 
// var myColor = ["Red", "Green", "White", "Black"];
//     var x = myColor.toString("Red", "Green", "White", "Black");
//      document.getElementById("demo").innerHTML = x;
// }

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());

// JavaScript String
// Exercise 1
// Write a JavaScript function that reverses a number.
// For example, if x = 32443 then the output should be 34423.

const num = 34423;
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));

// Exercise 2
// Write a JavaScript function that returns a string in alphabetical order. 
// For example, if x = 'webmaster' then the output should be 'abeemrstw'.



function makeAlphabet(str) {
  var arr = str.split('');
  arr.sort();
  return arr.join('').trim();
}
console.log(makeAlphabet("webmaster"));

// Explaination
// Line 1 of makeAlphabet converts the string into an array, with each character beeing one array element.
// Line 2 sorts the array in alphabetic order.
// Line 3 converted the array elements back to a string and thereby removes all whitespace characters

// Write a JavaScript function that converts the first letter of every word to uppercase.
// For example, if x = "prince of persia" then the output should be "Prince Of Persia".

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("prince of persia"));

// Explaination
// The charAt() method is used to get the specified character from a string.
// Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.
// The toUpperCase() method is used to convert the string value to uppercase.
// The slice() method returns a shallow copy of a portion of an array into a new array object.
// The push() method is used to add one or more elements to the end of an array and returns the new length of the array.


// Write a JavaScript function that finds the longest word in a phrase.
// For example, if x = "Web Development Tutorial", then the output should be "Development".

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));


Assume str = '@Web Development #Tutorial';

//Explaination
// Assume str = '@Web Development #Tutorial';
// The match() method is used to retrieve the matches when matching a string against a regular expression.
// Therefore str.match(/\w[a-z]{0,}/gi) will return ["Web", "Development", "Tutorial"].
// For loop checks the length of the array element and compare with previous one and finally return the longest string.
// The length property represents an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.
// Syntax -> arr.length

