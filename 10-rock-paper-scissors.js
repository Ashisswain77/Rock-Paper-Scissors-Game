let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

Update_Score();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'Rock') {
            result = 'You Loose';
        } else if (computerMove === 'Paper') {
            result = 'You Win';
        } else {
            result = 'Tie';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else {
            result = 'You Loose';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You loose';
        } else {
            result = 'You Win';
        }
    }

    if (result === 'You Win') {
        score.wins += 1;
    } else if (result === 'You Loose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    Update_Score();

    document.querySelector('.js-result').innerHTML = `${result}.`;

    document.querySelector('.js-moves').innerHTML = `You
<img src="./icons/${playerMove}-emoji.png" class="move-icon">
<img src="./icons/${computerMove}-emoji.png" class="move-icon">
Computer`;

}

function Update_Score() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber > 0 && randomNumber < 0.33) {
        computerMove = 'Rock';
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    return computerMove;
}