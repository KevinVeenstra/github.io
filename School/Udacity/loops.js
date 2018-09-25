/*
// DEZE OPDRACHTEN GEBRUIKEN WHILE LOOPS!
// Optellen in loop
var x = 0 + 1;
for (x = 1; x <= 10; x++) {
  console.log(x + " mississippi");
}


// Bottles of juis tekst herhalen op verandering bij meervoud naar enkel voud
var num = 99;

while (num > 0) {
  if (num > 2) {
    console.log(num + " bottles of juice on the wall!! " + num + " bottles of juice!! Take one down, pass is around..." + --num + " bottles of juice on the wall!!");
  } else if (num > 1) {
    console.log(num + " bottles of juice on the wall!! " + num + " bottles of juice!! Take one down, pass is around..." + --num + " bottle of juice on the wall!!");
  } else {
    console.log(num + " bottle of juice on the wall!! " + num + " bottle of juice!! Take one down, pass is around..." + --num + " bottles of juice on the wall!!");
  }
}


// Aftellen racket lanchering plus berichten op vaste plaatsen
var sec = 60;

while (sec >= 0) {
  if (sec == 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (sec == 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (sec == 16) {
    console.log("Activate launch pas sound supression system");
  } else if (sec == 10) {
    console.log("Activate main engine hydrogen burnoff system")
  } else if (sec == 0) {
    console.log("Solid rocket booster ignition and liftoff!")
  } else {
    console.log("T-" + sec + " seconds");
  }
  sec--;
}


// DEZE OPDRACHTEN GEBRUIKEN FOR LOOPS!
// Opdracht aftellen van 9 naar 0
for (x = 9; x > 0; x--) {
  console.log("Hello " + x);
}

// opdracht alle mogelijk row-seat combinaties weergeven
for (var row = 0; row <= 25; row++) {
  for (var seat = 0; seat <=99; seat++) {
    console.log(row + "-" + seat);
  }
}
*/