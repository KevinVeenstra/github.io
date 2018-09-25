/*
const outPutArray= [];

function pig(numberOfPigs) {
    for (let i = numberOfPigs; i > 0; i--) {
        outPutArray.push(`  🐷+🔥=🥓  `);
    }
}

const outPut = pig(450);
console.log(outPutArray.toString());



function pigs(numberOfPigs) {
    var pigs = ``;
    var counter = 1;
    while (counter <= numberOfPigs) {
        pigs += 🐷;
        counter++;
    }
    pigs += knor;
    return pigs;
}
console.log(pigs(3));


function facorial(x, y) {
   var awnser = x * y;
   return awnser;
}
var number = facorial(1, 5);
console.log(number);

 
// udacity opdracht hahaha
const   laughArray = [];

function laugh(num) {
    for (var i = num; i > 0; i--) {
        laughArray.push(Ha);
    }
}

const output = laugh(5);
console.log(laughArray.toString());



function writeASound(animal) {
    if (animal == dog) {
        sound = 'woef';
        return (sound);
    } else if (animal == cat) {
        sound = miauw;
        return (sound);
    } else if (animal == horse) {
        sound = Nggghh!;
        return (sound);
    } else {
        sound = animal not reconized;
        return (sound);
    }
}
console.log(writeASound(horse));



const MakeASound = function (animal) {
    if (animal == horse) {
        var audio = new audio(./sound/horse.mp3);
        return audio;
    }
}

console.log(MakeASound(horse));

function findAverage(x, y) {
    var awnser = (x + y) / 2;
    return awnser;
}

console.log(findAverage(5, 9));
*/
/*
function fibonacci(num) {
    var fibonacci = []; // Initialize array!

    fibonacci[0] = 1;
    fibonacci[1] = 0;
    for (i = 2; i <= num; i++) {
        // Next fibonacci number = previous + one before previous // Translated to JavaScript:
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        console.log(fibonacci[i]);
        
    }
    return "the fibonacci reeks tot en met nummer: " + num;
}

console.log(fibonacci(15));

//----------------------------------


function countdown(seconds) {
    for (let s = seconds; s > 0; s--) {
        console.log(`T-` + s + ` seconds to liftoff!`);
    }
    return `LIFT OFF!`;
}

console.log(countdown(15));

*/

setState = 10;

function countdown() {
	setState--;
	document.getElementById("seconds").setState = timeleft;
	if (timeleft > 0) {
		setTimeout(countdown, 1000);
	}
};

setTimeout(countdown, 1000);