/*
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(array) {
    if (array.length >= 7) {
        return true;
    } else {
        return false;
    }
}
*/

/*
const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
var randomItem = lapRounds[Math.floor(Math.random()*lapRounds.length)];
console.log(randomItem);
*/

/*
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];

 console.log(allMyRecords.filter);
*/

/*
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
 donut += " hole";
 console.log(donut);
});
*/

/*
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(tip) {
 tip = tip * 1.15;
 return tip.toFixed(2);
});

console.log(totals);
*/

/*
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var r = 0; r < r.lenght; r++) {
    for (var c = 0; c < c[r].lenght; c++) {
    }
}
console.log(numbers[r, c]);
*/

/*
var myArray = [];

// Only change code below this line.
for (var i = 0; i <= 5 ; i++) {
  myArray.push(i);
}

console.log(myArray[i]);
*/

function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
  }
  
console.log(ourRandomRange(1, 9));

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
  
  }
  console.log(myRandom);
  // Change these values to test your function
  var myRandom = randomRange(5, 15);