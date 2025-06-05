// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42);
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet (someValue){
   return distanceFromHqInBlocks(someValue) * 264;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264; 
}
    
distanceFromHqInFeet(43,48);
distanceFromHqInFeet(50,60);
distanceFromHqInFeet(34,28);


function calculatesFarePrice(start, destination) {
  let distance = Math.abs(start - destination) * 264;

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

    calculatesFarePrice(43, 44);
    calculatesFarePrice(34, 32);
    calculatesFarePrice(50, 58);
    calculatesFarePrice(34, 24);