let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;

let runnerAge = 18;

if (earlyRegister && runnerAge > 18){
  raceNumber = raceNumber + 1000;
}
console.log(raceNumber);

if (earlyRegister && runnerAge > 18){
  console.log(`Your start time is 9:30am & your race number is ${raceNumber}`);
} else if (earlyRegister == false && runnerAge > 18){
  console.log(`Your start time is 11:00am & your race number is ${raceNumber}`);
} else if (runnerAge < 18){
  console.log(`Your start time is 12:30pm & your race number is ${raceNumber}`);
} else {
  console.log(`You appear to be exactly 18, go see the registration desk!`);
}