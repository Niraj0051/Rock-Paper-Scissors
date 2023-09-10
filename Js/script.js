let score = JSON.parse(localStorage.getItem('score')) || 
      {
        wins : 0,
        losses : 0,
        ties : 0
      };
      /*when we select reset score and refresh the page, score is removed from localStorage and there is no score. 
      That's why we are supposed to define score as score = {wins : 0,losses : 0,ties : 0}
      And also when when we'll start our game initially score is not there in local storage.
      So, defining score as score = {wins : 0,losses : 0,ties : 0}
      */
      
      /*if (!score){ //score === null
        score = {
          wins : 0,
          losses : 0,
          ties : 0
        };
      }*/
    
      function playGame (playerMove)
      {
        const computerMove = pickComputerMove();
        let result = '';

        // when player selects a rock
        if (playerMove === 'rock'){
          if (computerMove === 'rock'){
            result = 'Tie.';
          }
          else if (computerMove === 'paper'){
            result = 'You Lose.';
          }
          else if (computerMove === 'scissors'){
            result = 'You Win.';
          }
        }
        // when player selects a paper
        else if (playerMove === 'paper'){
          if (computerMove === 'rock'){
            result = 'You Win.';
          }
          else if (computerMove === 'paper'){
            result = 'Tie.';
          }
          else if (computerMove === 'scissors'){
            result = 'You Lose.';
          }
        }
        //when player selects a scissors
        else if (playerMove === 'scissors'){
          if (computerMove === 'rock'){
            result = 'You Lose.';
          }
          else if (computerMove === 'paper'){
            result = 'You Win.';
          }
          else if (computerMove === 'scissors'){
            result = 'Tie.';
          }
        }

        //updating scores
        if (result === 'You Lose.'){
          score.losses += 1;
        }
        else if (result === 'You Win.'){
          score.wins += 1;
        }
        else if (result === 'Tie.'){
          score.ties += 1;
        }

        //storing score values in local storage
        localStorage .setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You <img src="Images/${playerMove}-emoji.png" class="move-icon"> - <img src="Images/${computerMove}-emoji.png" class="move-icon"> Computer`;
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }


        

        /*using concatenation
        alert('You picked ' + playerMove + 'Computer picked ' + computerMove + ' ' + result );
        */
//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`);
//       }

      function pickComputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';
        
        if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
        }
        else if (randomNumber >= 1/3 && randomNumber < 2/3){
          computerMove = 'paper';
        }
        else{
          computerMove = 'scissors';
        }

        return computerMove;
      }

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
      }
      