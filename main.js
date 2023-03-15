    const choices = ['rock', 'paper', 'scissors'];

    function computerChoice () {
           return choices[Math.floor(Math.random() * choices.length)];
          }
    function playerChoice () {
        let input = prompt("Type rock, paper or scissors: ");
        while(input == null){
            input = prompt("Type rock, paper or scissors: ");
        }
            input = input.toLowerCase();
          let check = validateInput(input);
        while (check == false){
            input = prompt(
              'Type Rock, Paper, or Scissors. Check the spelling and try again.'
              );
            while(input == null){
            input = prompt("Type rock, paper or scissors: ");
          }
            input = input.toLowerCase();
            check = validateInput(input);
          }
           return input;
         }

    let playerSelection = playerChoice();
    let computerSelection = computerChoice();
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {
        if(playerSelection === computerSelection){
            return "It is a tie. Try again";
        } else if((playerSelection === "rock" && computerSelection == "scissors") || 
          (playerSelection === "paper" && computerSelection == "rock") || 
          (playerSelection === "scissors" && computerSelection == "paper")
          ){
            playerScore++;
            return "Player Win: " + `${playerSelection}` + " beats " + `${computerSelection}`;
        } else {
            computerScore++;
            return "Computer Win: " + `${computerSelection}` + " beats " + `${playerSelection}`;
        }
        }
          
      function game (playerSelection, computerSelection) {
          for (let i= 0; i<5; i++) {
              playerSelection = playerChoice();
              computerSelection = computerChoice();
              console.log(playRound(playerSelection, computerSelection));
              console.log("Player Score: " + playerScore);
              console.log("Computer Score: " + computerScore);
              console.log("Computer chose: " + computerSelection);
              console.log("Player chose: " + playerSelection);
            }
        }
        
        function validateInput(choice){
          return choices.includes(choice);
        }

        game ();

        

