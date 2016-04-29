'use strict';

//problem 1 - The Blob

//assert function
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ' + failureMessage);
  }
}

//constructor
function Blob(name) {
  this.name = name;
}

//instance
var blob = new Blob(blob);

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  var peoplePerHour = 0;
  for (var i = 0; i < population; i++) {
    peoplePerHour = i;
    population -= peoplePerHour;
  }
  if (population / peoplePerHour > 0) {
    peoplePerHour++;
  }
  return peoplePerHour;
};

var hoursSpentInDowington = blob.hoursToOoze(1000, 1);

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');


//PROBLEM 2 - Universal Translator
var hello = {
  klingon: 'nunqeH',
  romulan: 'Jolan\'tru',
  'federation standard': 'hello'
};

function SentientBeing(homePlanet, languageSpoken) {
  this.homePlanet = homePlanet;
  this.languageSpoken = hello.languageSpoken;
}

var human = new SentientBeing('klingon', 'klingon');

function sayHello(sb) {
  var homePlanet = sb.homePlanet;
  console.log(homePlanet);
  var translateTo = sb.languageSpoken;
  console.log(sb.languageSpoken);
}

SentientBeing.prototype.sayHello = function(sb) {
  var translateTo = sb.languageSpoken;
  console.log(translateTo);
};

//Problem 3
// var myArray = ['james', 'shane', 'jeremy'];
//
// function lastLetterSort(stringArray) {
//   function byLastLetter(a,b) {
//     if ((a[a.length - 1]) > (b[b.length - 1])) {
//       return 1;
//     }
//     if ((a[a.length - 1]) < (b[b.length - 1])) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
//   stringArray.sort(byLastLetter);
//   return stringArray;
// }
//
// lastLetterSort(myArray);
//
//sum
var sum = 0;
var numbers = [1,2,3];
function add(arrayElement) {
  sum += arrayElement;
}

console.log(numbers.forEach(add));
