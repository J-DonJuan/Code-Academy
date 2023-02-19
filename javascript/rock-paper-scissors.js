console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  console.log(`User choice: ${userInput}`)
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error, only "rock", "paper", or "scissors" please.')
  }
};

const getComputerChoice = () => {
  num = Math.floor(Math.random() * 3);
  if (num === 0){
    console.log("Computer choice: rock")
    return 'rock';
  } else if (num === 1){
    console.log("Computer choice: paper")
    return 'paper';
  } else {
    console.log("Computer choice: scissors")
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "The game was a tie!";
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "Computer wins!";
    } else {
      return "Player wins!";
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return "Computer wins!";
    } else {
      return "Player wins!";
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return "Computer wins!";
    } else {
      return "Player wins!";
    }
  }
}

console.log(determineWinner(getUserChoice('rock'), getComputerChoice()));