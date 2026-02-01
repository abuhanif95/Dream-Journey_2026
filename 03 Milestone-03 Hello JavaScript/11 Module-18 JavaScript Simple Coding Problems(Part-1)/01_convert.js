// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

//
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch";
  return result;
}

const height = inchToFeet(75);
console.log(height);

const height2 = inchToFeet2(75);
console.log(height2);

function mileToKilometer(mile) {
  const kilo = mile * 0.6219;
  return kilo;
}

function kiloToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}