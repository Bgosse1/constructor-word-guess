let word = require('./Word.js');
let inquirer = require('inquirer');
let wordList = require('./WordList');
let chalk = require('chalk');

var guesses;
var guessesLeft;
var randomWord;
var newWord;
var guessesLeft;

const questions = [
    {
        type: "input",
        name: "userGuess",
        message: "Guess a letter!",
        validate: validateGuess,
        when: function () {
            return (!newWord.wordGuessed() && guessesLeft > 0);
        }
    }
];

function init() {
    randomWord = getRandomWord();
    newWord = new word(randomWord);
    newWord.letterGuessed(' ');
    guesses = [];
    guessesLeft = 9;
}

function startGame() {
    if (!newWord.wordGuessed() && guessesLeft > 0) {
        console.log(chalk.blue(newWord + '' + "\n"));
    }

    inquirer
        .prompt(questions)
        .then(character => {
            var currentGuess = character.userGuess.toLowerCase();

            if (guesses.indexOf(currentGuess) === -1) {
                guesses.push(currentGuess);
                newWord.letterGuessed(currentGuess);
                if (randomWord.toLowerCase().indexOf(currentGuess.toLowerCase()) === -1) {
                    guessesLeft--;
                    console.log(chalk.red("\n" + "INCORRECT!!!" + "\n"));
                    console.log(guessesLeft + " guesses remaining!!!" + "\n");
                }
                else {
                    console.log(chalk.green("\n" + "CORRECT!!!" + "\n"));
                }
            } else {
                console.log("\n" + 'you already guessed ' + currentGuess + "\n");

            }
            if (!newWord.wordGuessed()) {
                if (guessesLeft < 1) {
                    console.log(randomWord + ' was the streamer.' + "\n");
                    console.log('Here is the next streamer' + "\n");
                    init();
                } else {
                    console.log('guesses so far: ' + guesses.join(', ') + "\n");
                }

            } else {
                console.log("\n" + "You got it right! Next Streamer!" + "\n");
                init();
            }
            startGame();
        });
};

function validateGuess(userGuess) {
    return /^[a-zA-Z]$/.test(userGuess);
};

function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

init();
startGame();