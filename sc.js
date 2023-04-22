'use strict';
let secretnumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    if (!guess) {
        document.querySelector('.message').textContent = `No Number`;
    }
    else if (guess === secretnumber) {
        document.querySelector('.message').textContent = 'Guess is correct';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('.number').textContent = secretnumber;

        document.querySelector(`body`).style.backgroundColor = "#60b347";
    }

    else if (guess !== secretnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretnumber ? 'Too High' : "Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'you loose this game';
            document.querySelector('.score').textContent = 0;
        }
    }
});
/*else if (guess > secretnumber) {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
        if (score <= 0) {
            document.querySelector('.message').textContent = 'you loose this game';
        }
    }
    else if (guess < secretnumber) {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;

        if (score <= 0) {
            document.querySelector('.message').textContent = 'you loose this game';
        }
    }

});*/
document.querySelector(`.again`).addEventListener('click', function () {
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = ``;

    document.querySelector('body').style.backgroundColor = "#222";

});