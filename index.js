let word = require('./Word.js');
let inquirer = require('inquirer');
let wordList = require('./WordList');

var randomWord = randomWord();
var newWord = new word(randomWord);

newWord.letterGuessed(' ');
console.log(newWord + '');

function startGame() {
    inquirer
        .prompt([{
            type: "input",
            name: "userGuess",
            message: "Guess a letter!",
            validate: validateGuess
        }])
        .then(character => {
            newWord.letterGuessed(character.userGuess);
            console.log(newWord + '');
            startGame();
        });
};

function validateGuess(userGuess) {
    return /^[a-zA-Z]$/.test(userGuess);
};

function randomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

startGame();