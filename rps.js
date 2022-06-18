//This function allows us to get user input and checks to see if they choose rock paper or scissors. 
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
    if (userInput === 'rock'){
      return userInput;
    } else if (userInput === 'paper'){
      return userInput;
    } else if (userInput == 'scissors'){
      return userInput;
    } else{
      console.log('Enter Rock Paper or scissors')
    }
}
// This is our function for getting the computer to generate a random number and use that number to decide between rock, paper or scissors.
 const getComputerChoice = () =>{
  let num = Math.floor(Math.random() * 2);
  if (num === 0){
    let num = 'rock';
    return num;
  } else if (num === 1){
    let num = 'paper';
    return num;
  } else if (num === 2){
    let num = 'scissors';
    return num;
  } else {
    console.log('looks like theres a bug in our computer choice function');
  }
 }

//This function determines our winner!  
function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'The game was a tie!'
    } 
    
    else if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
          return 'The computer won!'
      } else {
        return 'You won!'
        }  
    } 
    
    else if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'The computer won!'
      }
      else {
        return 'You won!'
      }
    }

    else if(userChoice === 'scissors')  {
      if (computerChoice === 'rock'){
        return 'The computer won!'
      }
      else{
        return 'You won!';
      }
    }

}
//This function plays our little game of Rock paper scissors. 
function playGame (){
  userChoice = getUserChoice('paper');
  console.log(userChoice);

  computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}



playGame();//To change user input change the value of 'paper' on line 66 to either rock or scissors. 
