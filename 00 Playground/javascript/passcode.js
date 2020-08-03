//
// Passcode
// by Austin Greer
// 2019.07.30
//

var code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let codeInput = [],
    codeOutput = document.getElementById('code');

function enterCode() {
    for (let codeInput = 0; codeInput.length < 4; codeInput++) {

    }
}

//---------------------------------------------------------------------------------


function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Game Output';
        return;
    }
    let dealerCardString = ''
    for (var i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n';
    }
    let playerCardString = ''
    for (var i = 0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText =
        'Dealer has:\n' + dealerCardString + '(Score: ' + dealerScore + ')\n\n' +
        'Player has:\n' + playerCardString + '(Score: ' + playerScore + ')\n\n';

    if (gameOver) {
        if (playerWon) {
            textArea.innerText += "YOU WIN!";
        }
        else {
            textArea.innerText += "Dealer wins";
        }
        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }
}